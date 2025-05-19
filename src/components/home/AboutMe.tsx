"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { TEducation, TExperience, TAbout } from "@/types/types";
import { getAboutMe } from "@/services/api.services";
import { LoaderComponent } from "../shared/LoaderComponent";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const [aboutData, setAboutData] = useState<TAbout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await getAboutMe();
        setAboutData(response?.data[0]);
      } catch (err) {
        console.error("Error fetching about information:", err);
        setError("Failed to load about information. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const handleDownloadResume = () => {
    if (!aboutData?.resumeLink) return;

    const link = document.createElement("a");
    link.href = aboutData.resumeLink;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <LoaderComponent centered size="xl" text="Loading about information..." />
    );
  }

  if (error) {
    return <div className="text-center text-destructive py-10">{error}</div>;
  }

  if (!aboutData) {
    return (
      <div className="text-center text-muted-foreground py-10">
        No about information available.
      </div>
    );
  }

  return (
    <div className="mx-auto py-16 px-4 mb-5">
      {/* Header with animated underline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-5 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">About Me</h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-primary mx-auto rounded-full"
        ></motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section with floating animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
          className="flex justify-center md:justify-between items-center"
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-lg transform rotate-3"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-lg transform -rotate-3"></div>

            {/* Main image container */}
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl border border-primary/20 bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>
              <Image
                src={aboutData.image}
                alt={aboutData.name}
                fill
                sizes="30vw"
                className="object-cover transition-all duration-700 hover:scale-105 z-10"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.div variants={slideUp}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {aboutData.name}
            </h2>
            <p className="text-xl text-muted-foreground mt-1">
              {aboutData.title}
            </p>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="text-foreground/80 leading-relaxed"
          >
            {aboutData.bio}
          </motion.p>

          <motion.div
            variants={slideUp}
            className="flex items-center text-muted-foreground"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-3">
              <FaMapMarkerAlt className="text-primary" />
            </div>
            <span>{aboutData.address}</span>
          </motion.div>

          {aboutData.resumeLink && (
            <motion.div variants={slideUp}>
              <Button
                onClick={handleDownloadResume}
                className="relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center z-10">
                  <FaDownload className="mr-2" /> Download Resume
                </span>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Education Section with card hover effects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-24"
      >
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
            <FaGraduationCap className="text-2xl text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.education.map((edu: TEducation, index: number) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-border/50">
                <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardContent className="p-6 pt-5">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {edu.institution}
                  </p>
                  {edu.department && (
                    <p className="text-muted-foreground mt-1">
                      {edu.department}
                    </p>
                  )}
                  {edu.year && (
                    <div className="flex items-center mt-4">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm rounded-full">
                        {edu.year}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section (if available) with enhanced cards */}
      {aboutData.experience && aboutData.experience.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24"
        >
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
              <FaBriefcase className="text-2xl text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {aboutData.experience.map((exp: TExperience, index: number) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-border/50">
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <CardContent className="p-6 pt-5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mt-3">
                      {exp.description}
                    </p>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-foreground text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
