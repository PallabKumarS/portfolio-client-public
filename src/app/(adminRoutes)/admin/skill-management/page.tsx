import { Metadata } from "next";
import AdminSkillPage from "./AdminSkillPage";
import { getAllSkills } from "@/services/skill.service";
import { Suspense } from "react";
import { LoaderComponent } from "@/components/shared/LoaderComponent";
import ContainerAdminComponent from "@/components/shared/ContainerAdminComponent";

export const metadata: Metadata = {
  title: "Dashboard | Skill Management",
  description: "Manage your technical skills and proficiency levels",
};

const SkillManagementPage = () => {
  const skillsPromise = getAllSkills();

  return (
    <ContainerAdminComponent>
      <Suspense fallback={<LoaderComponent centered size="xl" />}>
        <AdminSkillPage dataPromise={skillsPromise} />
      </Suspense>
    </ContainerAdminComponent>
  );
};

export default SkillManagementPage;
