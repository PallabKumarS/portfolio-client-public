import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FiGithub, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import ImageCarousel from "@/components/shared/ImageCarousel";
import { TMongoose, TProject } from "@/types/types";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

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
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm border border-muted/20">
        <div className="space-y-8 p-4 md:p-8">
          {/* Title with text generation effect */}
          <TextGenerateEffect
            words={title}
            className="text-3xl md:text-4xl font-bold text-center"
          />

          {/* Image Carousel */}
          <div className="w-full aspect-video">
            <ImageCarousel images={images} title={title} />
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
    </div>
  );
};

export default ProjectDetails;
