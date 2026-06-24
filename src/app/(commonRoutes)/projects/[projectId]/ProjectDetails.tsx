"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiArrowLeft, FiGithub, FiGlobe, FiStar } from "react-icons/fi";
import Link from "next/link";
import { TMongoose, TProject } from "@/types/types";
import ImageSlider from "@/components/shared/ImageSlider";
import { motion, Variants } from "framer-motion";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const badgePop = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

// ─── Component ─────────────────────────────────────────────────────────────────
const ProjectDetails = ({ data }: { data: TProject & TMongoose }) => {
  const {
    title,
    images,
    description,
    technology,
    liveLink,
    clientRepo,
    serverRepo,
    isFeatured,
  } = data;

  return (
    <div className="relative min-h-screen pb-20">
      {/* ── Background ambience ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-10 px-4 md:px-6">
        {/* ── Back Button ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/projects">
            <Button
              variant="ghost"
              className="group gap-2 hover:bg-primary/10 hover:text-primary transition-colors mt-5"
            >
              <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* ── Hero: Title + Badges ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            {isFeatured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                <FiStar className="h-3 w-3 fill-current" />
                Featured
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <div className="h-1 w-20 rounded-full bg-linear-to-r from-primary to-accent" />
        </motion.div>

        {/* ── Image Slider ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="w-full overflow-hidden border border-border/40 bg-card/50 shadow-2xl shadow-primary/10 backdrop-blur-sm h-fit"
        >
          <div className="aspect-video w-full">
            <ImageSlider images={images} variant="detail" priority />
          </div>
        </motion.div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: Description + Tech */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 lg:col-span-2"
          >
            {/* Description */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border/30 bg-card/60 p-6 backdrop-blur-sm md:p-8"
            >
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <span className="inline-block h-4 w-1 rounded-full bg-primary" />
                About This Project
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border/30 bg-card/60 p-6 backdrop-blur-sm md:p-8"
            >
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <span className="inline-block h-4 w-1 rounded-full bg-primary" />
                Tech Stack
              </h2>
              <motion.div variants={stagger} className="flex flex-wrap gap-2">
                {technology.map((tech) => (
                  <motion.div key={tech} variants={badgePop}>
                    <Badge
                      variant="secondary"
                      className="cursor-default bg-primary/10 text-primary hover:bg-primary/20 transition-colors capitalize border border-primary/20 px-3 py-1 text-sm"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Links Sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="h-fit rounded-2xl border border-border/30 bg-card/60 p-6 backdrop-blur-sm space-y-4 lg:sticky lg:top-24"
          >
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-4 w-1 rounded-full bg-primary" />
              Project Links
            </h2>

            <div className="space-y-3">
              {/* Live Site */}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                  >
                    <FiGlobe className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View Live Site
                  </Button>
                </a>
              )}

              {/* Client Repo */}
              {clientRepo && (
                <a
                  href={clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full group border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all"
                  >
                    <FiGithub className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Client Repository
                  </Button>
                </a>
              )}

              {/* Server Repo */}
              {serverRepo && (
                <a
                  href={serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full group border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all"
                  >
                    <FiGithub className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Server Repository
                  </Button>
                </a>
              )}
            </div>

            {/* Divider */}
            <div className="pt-2 border-t border-border/30">
              <p className="text-xs text-muted-foreground text-center">
                {technology.length} technologies used
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
