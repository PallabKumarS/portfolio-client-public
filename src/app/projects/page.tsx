import { Metadata } from "next";
import ContainerComponent from "@/components/shared/ContainerComponent";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
  title: "Projects | Pallab Kumar Sarker",
  description: "This is Project Page",
};

const Page = async () => {
  return (
    <ContainerComponent className="mt-10">
      <ProjectPage />
    </ContainerComponent>
  );
};

export default Page;
