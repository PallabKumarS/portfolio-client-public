import { Metadata } from "next";
import AdminProjectPage from "./AdminProjectPage";
import { getAllProjects } from "@/services/project.service";
import ContainerAdminComponent from "@/components/shared/ContainerAdminComponent";

export const metadata: Metadata = {
  title: "Project Management",
  description: "Add, delete or edit projects here",
};

const ProjectManageMentPage = async () => {
  const res = await getAllProjects();

  return (
    <ContainerAdminComponent>
      <AdminProjectPage data={res?.data} />
    </ContainerAdminComponent>
  );
};

export default ProjectManageMentPage;
