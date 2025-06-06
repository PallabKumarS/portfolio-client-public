/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FiArrowRight, FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { TMongoose, TProject } from "@/types/types";
import { getAllProjects } from "@/services/api.services";
import { LoaderComponent } from "../shared/LoaderComponent";
import { FaStar } from "react-icons/fa";
import { NoData } from "../shared/NoData";
import ImageSlider from "../shared/ImageSlider";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const featuredItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      scale: {
        type: "spring",
        stiffness: 100,
      },
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Featured = () => {
  const [projects, setProjects] = useState<(TProject & TMongoose)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getAllProjects();
        if (res?.data) {
          // Get the first 3 projects
          setProjects(res.data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <LoaderComponent size={"xl"} centered text="Loading projects..." />;
  }

  if (projects.length === 0) {
    return <NoData />;
  }

  return (
    <section className="py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-5 text-center"
        >
          <h1 className="text-4xl font-bold mb-3">Featured</h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-primary mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            // Determine if this project is featured
            const isFeatured = project.isFeatured === true;

            // Choose the appropriate animation variant based on featured status
            const currentVariant = isFeatured
              ? featuredItemVariants
              : itemVariants;

            return (
              <motion.div
                key={project._id}
                variants={currentVariant}
                whileHover={isFeatured ? { scale: 1.02 } : {}}
                className={`max-w-6xl mx-auto ${
                  isFeatured ? "relative z-10" : ""
                }`}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute -top-4 -right-4 z-20 bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg flex items-center gap-1 transform rotate-3">
                    <FaStar className="text-accent" />
                    <span className="font-semibold">Featured</span>
                  </div>
                )}

                <Card
                  className={`overflow-hidden backdrop-blur-sm border-border/50 transition-all duration-300
                    ${
                      isFeatured
                        ? "bg-gradient-to-br from-card/70 to-background/70 shadow-xl shadow-primary/20 border-primary/30"
                        : "bg-card/50 hover:shadow-lg hover:shadow-primary/10"
                    }`}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Image Section */}
                      <motion.div
                        className={`w-full h-full lg:order-1 ${
                          isFeatured ? "animate-pulse-slow" : ""
                        }`}
                      >
                        <div className="p-6 h-full">
                          <ImageSlider images={project.images} variant="card" />
                        </div>
                      </motion.div>

                      {/* Content Section */}
                      <motion.div className="p-6 lg:p-8 space-y-4 flex flex-col lg:order-2">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {project.title}
                            {isFeatured && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.5,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  repeatDelay: 5,
                                }}
                                className="inline-block ml-2 text-accent"
                              >
                                <FaStar />
                              </motion.span>
                            )}
                          </h3>
                          <div
                            className={`h-1 w-16 rounded-full mb-4 ${
                              isFeatured
                                ? "bg-gradient-to-r from-primary to-secondary"
                                : "bg-primary/70"
                            }`}
                          ></div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <motion.div
                          variants={containerVariants}
                          className="flex flex-wrap gap-2 py-2"
                        >
                          {project.technology.map((tech, i) => (
                            <motion.div
                              key={i}
                              variants={badgeVariants}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className={`${
                                  isFeatured
                                    ? "bg-primary/20 hover:bg-primary/30 text-primary-foreground"
                                    : "bg-secondary hover:bg-secondary/80"
                                } transition-colors`}
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>

                        <div className="flex flex-wrap gap-4 pt-4 mt-auto">
                          {project.liveLink && (
                            <Button
                              variant={isFeatured ? "default" : "default"}
                              className={`group ${
                                isFeatured
                                  ? "bg-primary hover:bg-primary/90"
                                  : ""
                              }`}
                              asChild
                            >
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiGlobe className="mr-2 h-4 w-4" />
                                Live Site
                                <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </Button>
                          )}

                          {project.clientRepo && (
                            <Button
                              variant="outline"
                              className={`group ${
                                isFeatured
                                  ? "border-primary/50 hover:border-primary"
                                  : ""
                              }`}
                              asChild
                            >
                              <a
                                href={project.clientRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiGithub className="mr-2 h-4 w-4" />
                                Client Code
                                <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </Button>
                          )}

                          {project.serverRepo && (
                            <Button
                              variant="outline"
                              className={`group ${
                                isFeatured
                                  ? "border-primary/50 hover:border-primary"
                                  : ""
                              }`}
                              asChild
                            >
                              <a
                                href={project.serverRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiGithub className="mr-2 h-4 w-4" />
                                Server Code
                                <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Featured;
