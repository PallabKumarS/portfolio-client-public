import { Metadata } from "next";
import ContainerComponent from "@/components/shared/ContainerComponent";
import ProjectPage from "./ProjectPage";
import { getAllProjects } from "@/services/api.services";
import { Suspense } from "react";
import { LoaderComponent } from "@/components/shared/LoaderComponent";

export const metadata: Metadata = {
  title: "Projects | Pallab Kumar Sarker",
  description:
    "Explore the web development projects built by Pallab Kumar Sarker using Next.js, React, Node.js, and more.",
};

const Page = async () => {
  const projectsPromise = getAllProjects();

  return (
    <ContainerComponent className="mt-32">
      <Suspense
        fallback={
          <LoaderComponent centered size="xl" text="Loading projects..." />
        }
      >
        <ProjectPage dataPromise={projectsPromise} />
      </Suspense>
    </ContainerComponent>
  );
};

export default Page;
