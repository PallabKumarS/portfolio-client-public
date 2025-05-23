import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FiGithub, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { TMongoose, TProject } from "@/types/types";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import ContainerComponent from "@/components/shared/ContainerComponent";
import ImageSlider from "@/components/shared/ImageSlider";

const ProjectDetails = ({ data }: { data: TProject & TMongoose }) => {
  const {
    title,
    images,
    description,
    technology,
    liveLink,
    clientRepo,
    serverRepo,
  } = data;

  return (
    <ContainerComponent className="mx-auto py-10 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Mesh Grid Pattern - Subtle background texture */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--muted)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <Card className="max-w-6xl mx-auto bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm border border-muted/20 relative z-10 shadow-xl">
        <div className="space-y-8 p-4 md:p-8">
          {/* Title with text generation effect */}
          <TextGenerateEffect
            words={title}
            className="text-3xl md:text-4xl font-bold text-center"
          />

          {/* Image Carousel */}
          <div className="w-full aspect-video">
            <ImageSlider images={images} variant="detail" />
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technology.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <Link href={liveLink} target="_blank">
              <Button size="lg" className="group">
                <FiGlobe className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Live Site
              </Button>
            </Link>

            {clientRepo && (
              <Link href={clientRepo} target="_blank">
                <Button variant="outline" size="lg" className="group">
                  <FiGithub className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Client Repository
                </Button>
              </Link>
            )}

            {serverRepo && (
              <Link href={serverRepo} target="_blank">
                <Button variant="outline" size="lg" className="group">
                  <FiGithub className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Server Repository
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>
    </ContainerComponent>
  );
};

export default ProjectDetails;
