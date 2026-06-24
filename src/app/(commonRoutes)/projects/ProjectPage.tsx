/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { NoData } from "@/components/shared/NoData";
import { TMongoose, TProject } from "@/types/types";

const ProjectPage = ({ dataPromise }: { dataPromise: Promise<any> }) => {
  const response = use(dataPromise);
  const data: (TProject & TMongoose)[] = response?.data ?? [];

  return (
    <div className="my-10">
      <div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-4">
            {data?.map((project, index) => (
              <ProjectCard
                data={project}
                key={project?._id}
                priority={index < 4}
              />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
