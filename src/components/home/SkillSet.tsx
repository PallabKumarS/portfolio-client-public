/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getAllSkills } from "@/services/api.services";
import { LoaderComponent } from "../shared/LoaderComponent";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as DiIcons from "react-icons/di";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

// Define the Skill interface
interface Skill {
  category: "frontend" | "backend" | "tools";
  name: string;
  icon: string;
  proficiency: number;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

// Icon libraries mapping
const iconLibraries = {
  Fa: FaIcons,
  Si: SiIcons,
  Ri: RiIcons,
  Ai: AiIcons,
  Bi: BiIcons,
  Bs: BsIcons,
  Di: DiIcons,
  Gi: GiIcons,
  Go: GoIcons,
  Hi: HiIcons,
  Im: ImIcons,
  Io: IoIcons,
  Md: MdIcons,
  Ti: TiIcons,
  Vsc: VscIcons,
  Wi: WiIcons,
};

// Dynamic icon component
const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  // Handle URL-based icons
  if (iconName.startsWith("http")) {
    return (
      <Image
        src={iconName}
        alt="skill icon"
        width={24}
        height={24}
        className={`object-contain ${className || ""}`}
      />
    );
  }

  try {
    const prefix = iconName.substring(0, 2);
    const name = iconName;

    const IconLibrary = iconLibraries[prefix as keyof typeof iconLibraries];

    if (IconLibrary && IconLibrary[name as keyof typeof IconLibrary]) {
      const Icon = IconLibrary[name as keyof typeof IconLibrary] as any;
      return <Icon className={`text-xl ${className || ""}`} />;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [prefix, library] of Object.entries(iconLibraries)) {
      if (library[iconName as keyof typeof library]) {
        const Icon = library[iconName as keyof typeof library] as any;
        return <Icon className={`text-xl ${className || ""}`} />;
      }
    }

    return <FaCode className={`text-xl ${className || ""}`} />;
  } catch (error) {
    console.error(`Error rendering icon: ${iconName}`, error);
    return <FaCode className={`text-xl ${className || ""}`} />;
  }
};

const SkillSet = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const res = await getAllSkills();
        if (res?.data && Array.isArray(res.data)) {
          setSkills(res.data);
        }
      } catch (err) {
        console.error("Error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillData();
  }, []);

  if (loading) {
    return <LoaderComponent centered size="xl" text="Loading Skills..." />;
  }

  // Group skills by category
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  // Helper function to get color class based on proficiency
  const getProficiencyColorClass = (proficiency: number) => {
    if (proficiency >= 90) return "bg-green-500";
    if (proficiency >= 80) return "bg-blue-500";
    if (proficiency >= 70) return "bg-yellow-500";
    if (proficiency >= 60) return "bg-primary";
    return "bg-red-500";
  };

  return (
    <div className="mx-auto py-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-2">My Skills</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Frontend Skills Card */}
        {frontendSkills.length > 0 && (
          <motion.div variants={cardVariants} className="col-span-1">
            <Card className="h-full overflow-hidden border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <FaCode className="text-xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
              </CardHeader>
              <CardContent className="space-y-5">
                <motion.div variants={containerVariants} className="space-y-4">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 flex items-center justify-center text-primary">
                            <DynamicIcon iconName={skill.icon} />
                          </div>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2 + index * 0.1,
                          }}
                          className={`h-full rounded-full ${getProficiencyColorClass(
                            skill.proficiency
                          )}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Backend Skills Card */}
        {backendSkills.length > 0 && (
          <motion.div variants={cardVariants} className="col-span-1">
            <Card className="h-full overflow-hidden border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-secondary to-primary"></div>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                  <FaServer className="text-xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </CardHeader>
              <CardContent className="space-y-5">
                <motion.div variants={containerVariants} className="space-y-4">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 flex items-center justify-center text-primary">
                            <DynamicIcon iconName={skill.icon} />
                          </div>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2 + index * 0.1,
                          }}
                          className={`h-full rounded-full ${getProficiencyColorClass(
                            skill.proficiency
                          )}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Tools Skills Card */}
        {toolsSkills.length > 0 && (
          <motion.div variants={cardVariants} className="col-span-1">
            <Card className="h-full overflow-hidden border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-accent to-primary"></div>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                  <FaTools className="text-xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tools & Platforms</h3>
              </CardHeader>
              <CardContent className="space-y-5">
                <motion.div variants={containerVariants} className="space-y-4">
                  {toolsSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 flex items-center justify-center text-primary">
                            <DynamicIcon iconName={skill.icon} />
                          </div>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2 + index * 0.1,
                          }}
                          className={`h-full rounded-full ${getProficiencyColorClass(
                            skill.proficiency
                          )}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>

      {/* Fallback message if no skills are found */}
      {skills.length === 0 && !loading && (
        <div className="text-center py-10 text-muted-foreground">
          No skills data available. Please add skills to your database.
        </div>
      )}
    </div>
  );
};

export default SkillSet;
