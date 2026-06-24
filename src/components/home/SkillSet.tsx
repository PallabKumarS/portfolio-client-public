/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";
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

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      variants={skillVariants}
      className="flex items-center gap-3 py-1"
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-primary/10 text-primary">
        <DynamicIcon iconName={skill.icon} />
      </div>
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </motion.div>
  );
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const renderSkillGroup = (skillsToRender: Skill[]) => {
  const expert = skillsToRender.filter((s) => s.proficiency >= 80);
  const comfortable = skillsToRender.filter(
    (s) => s.proficiency >= 50 && s.proficiency < 80,
  );
  const familiar = skillsToRender.filter((s) => s.proficiency < 50);

  return (
    <motion.div variants={containerVariants} className="space-y-6">
      {expert.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider border-b border-border pb-1">
            Expert
          </h4>
          <div className="space-y-4">
            {expert.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      )}
      {comfortable.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider border-b border-border pb-1">
            Comfortable
          </h4>
          <div className="space-y-4">
            {comfortable.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>
      )}
      {familiar.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider border-b border-border pb-1">
            Familiar
          </h4>
          <div className="space-y-4">
            {familiar.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const SkillSet = ({ dataPromise }: { dataPromise: Promise<any> }) => {
  const response = use(dataPromise);
  const skills: Skill[] =
    response?.data && Array.isArray(response.data) ? response.data : [];

  // Group skills by category
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend",
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <div className="mx-auto py-20">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-5 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">Skills</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-primary mx-auto rounded-full"
        ></motion.div>
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
              <div className="h-1 w-full bg-linear-to-r from-primary to-secondary"></div>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <FaCode className="text-xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
              </CardHeader>
              <CardContent className="space-y-5">
                {renderSkillGroup(frontendSkills)}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Backend Skills Card */}
        {backendSkills.length > 0 && (
          <motion.div variants={cardVariants} className="col-span-1">
            <Card className="h-full overflow-hidden border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-1 w-full bg-linear-to-r from-secondary to-primary"></div>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                  <FaServer className="text-xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </CardHeader>
              <CardContent className="space-y-5">
                {renderSkillGroup(backendSkills)}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Tools Skills Card */}
        {toolsSkills.length > 0 && (
          <motion.div variants={cardVariants} className="col-span-1">
            <Card className="h-full overflow-hidden border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="h-1 w-full bg-linear-to-r from-accent to-primary"></div>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                  <FaTools className="text-xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tools & Platforms</h3>
              </CardHeader>
              <CardContent className="space-y-5">
                {renderSkillGroup(toolsSkills)}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>

      {/* Fallback message if no skills are found */}
      {skills.length === 0 && (
        <div className="text-center py-10 text-muted-foreground">
          No skills data available. Please add skills to your database.
        </div>
      )}
    </div>
  );
};

export default SkillSet;
