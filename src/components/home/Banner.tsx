"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-background via-background/95 to-primary/10">
      {/* Improved background design */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Content */}
      {mounted && (
        <motion.div
          className="container mx-auto px-4 z-10 text-center md:text-left md:flex items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-3/5">
            <motion.div variants={itemVariants} className="mb-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Hi, I&apos;m{" "}
              <span className="text-primary">Pallab Kumar Sarker</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl"
            >
              I build modern, responsive web applications with cutting-edge
              technologies. Turning ideas into elegant digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all shadow-md"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/PallabKumarS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-all"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/pallab-pks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/PallabkumarS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-all"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hidden md:block md:w-2/5 mt-10 md:mt-0"
          >
            {/* Code visualization element */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-muted shadow-xl">
                <pre className="text-xs md:text-sm font-mono overflow-hidden">
                  <code className="language-javascript">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-muted-foreground ml-2">
                        portfolio.tsx
                      </span>
                    </div>
                    <div className="text-blue-400">const</div>
                    <div>
                      <span className="text-green-400">developer</span> = {`{`}
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow-400">name</span>:{" "}
                      <span className="text-primary">
                        &quot;Pallab Kumar Sarker&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow-400">skills</span>: [
                      <span className="text-primary">&quot;NextJs&quot;</span>,{" "}
                      <span className="text-primary">&quot;NodeJs&quot;</span>,{" "}
                      <span className="text-primary">
                        &quot;TypeScript&quot;
                      </span>
                      , ...],
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow-400">passion</span>:{" "}
                      <span className="text-primary">
                        &quot;Building amazing web experiences&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">createSolution</span>:{" "}
                      <span className="text-purple-400">{`() =>`}</span> {`{`}
                    </div>
                    <div className="pl-8">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-primary">
                        &quot;Innovative & Elegant Code&quot;
                      </span>
                      ;
                    </div>
                    <div className="pl-4">{`}`},</div>
                    <div>{`}`}</div>
                  </code>
                </pre>

                {/* Animated typing cursor */}
                <div className="absolute bottom-8 right-8 w-2 h-4 bg-primary animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
