"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/shared/ImageCarousel";
import { FiArrowRight, FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { TMongoose, TProject } from "@/types/types";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/api.services";
import { LoaderComponent } from "../shared/LoaderComponent";

const Featured = () => {
  const [projects, setProjects] = useState<(TProject & TMongoose)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await getAllProjects();
      setProjects(res?.data.slice(0, 3));
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading)
    return (
      <LoaderComponent size={"xl"} centered text="Loading new projects..." />
    );

  console.log(projects);

  const featured = {
    name: "Lagbe Kichu",
    images: [
      "https://res.cloudinary.com/dchqfpvjb/image/upload/v1745333597/e5d2fhm2lqgyiaun4z4c.png",
      "https://res.cloudinary.com/dchqfpvjb/image/upload/v1745333609/ejkxrrffkwnplcu1ddfo.png",
      "https://res.cloudinary.com/dchqfpvjb/image/upload/v1745333663/nja5adixt16ysrthpmki.png",
    ],
    info: "Browse through a wide range of products, add them to your cart, and enjoy a seamless shopping experience. Our platform offers a user-friendly interface, secure payment options, and fast delivery. Join us today and start shopping with confidence!",
    technology: [
      "Html",
      "Css",
      "Tailwind",
      "NextJs",
      "JWT",
      "Shadcn",
      "Mongoose",
      "NodeJs",
      "Express",
      "Websocket",
      "Shurjopay",
    ],
    liveLink: "https://pks-lagbe-kichu.vercel.app/",
    clientRepo: "https://github.com/PallabKumarS/lagbe-kichu-client",
    serverRepo: "https://github.com/PallabKumarS/lagbe-kichu-server",
  };

  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Project
        </h2>
        <Card className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full h-full">
                <ImageCarousel images={featured.images} title={featured.name} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{featured.name}</h3>
                <p className="text-gray-300">{featured.info}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.technology.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-700 hover:bg-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="default" className="group" asChild>
                    <a
                      href={featured.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGlobe className="mr-2 h-4 w-4" />
                      Live Site
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" className="group" asChild>
                    <a
                      href={featured.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 h-4 w-4" />
                      Client Code
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" className="group" asChild>
                    <a
                      href={featured.serverRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 h-4 w-4" />
                      Server Code
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Featured;
