"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FiEye, FiGithub, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { TMongoose, TProject } from "@/types/types";
import ImageSlider from "../shared/ImageSlider";
import MovingGradientBorder from "../shared/MovingBorder";

interface ProjectCardProps {
  data: TProject & TMongoose;
  edit?: boolean;
  priority?: boolean;
}

const ProjectCard = ({ data, priority = false }: ProjectCardProps) => {
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
    <CardContainer className="w-full">
      <MovingGradientBorder className="rounded-[22px] p-4 bg-card">
        <Card className="w-full bg-transparent border-none">
          <CardBody className="relative w-full h-fit flex flex-col gap-y-3 hover:shadow-2xl hover:shadow-primary/10 border-border rounded-xl p-2 md:p-6">
            {/* title  */}
            <CardItem className="text-lg sm:text-xl font-bold text-foreground">
              {title}
            </CardItem>
            {/* image here  */}
            <CardItem className="">
              <ImageSlider images={images} variant="card" priority={priority} />
            </CardItem>
            {/* description here  */}
            <CardItem className="text-muted-foreground text-xs sm:text-sm mt-4 line-clamp-3">
              {description}
            </CardItem>
            {/* technology here  */}
            <CardItem className="flex flex-wrap gap-1 md:gap-2">
              {technology.slice(0, 9).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs sm:text-sm group-hover:animate-shine bg-linear-to-r from-primary/20 via-primary/40 to-primary/20 bg-size-[200%_100%]"
                >
                  {tech}
                </Badge>
              ))}
              {technology.length > 9 && (
                <Badge
                  variant="secondary"
                  className="text-xs sm:text-sm group-hover:animate-shine bg-linear-to-r from-primary/20 via-primary/40 to-primary/20 bg-size-[200%_100%]"
                >
                  +{technology.length - 9}
                </Badge>
              )}
            </CardItem>
            {/* links here  */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <CardItem>
                <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <FiGlobe className="w-3 h-3 md:w-4 md:h-4" />
                    Live Site
                  </Button>
                </Link>
              </CardItem>

              {clientRepo && (
                <CardItem>
                  <Link href={clientRepo} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <FiGithub className="w-3 h-3 md:w-4 md:h-4" />
                      Client
                    </Button>
                  </Link>
                </CardItem>
              )}

              {serverRepo && (
                <CardItem>
                  <Link href={serverRepo} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <FiGithub className="w-3 h-3 md:w-4 md:h-4" />
                      Server
                    </Button>
                  </Link>
                </CardItem>
              )}
            </div>

            <CardItem>
              <Link href={`/projects/${data._id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm text-primary"
                >
                  <FiEye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  Details
                </Button>
              </Link>
            </CardItem>
          </CardBody>
        </Card>
      </MovingGradientBorder>
    </CardContainer>
  );
};

export default ProjectCard;
