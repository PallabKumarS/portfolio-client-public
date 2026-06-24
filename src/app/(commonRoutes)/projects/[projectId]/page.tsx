import { getProjectDetails } from "@/services/api.services";
import ProjectDetails from "./ProjectDetails";
import ContainerComponent from "@/components/shared/ContainerComponent";

// generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await getProjectDetails(projectId);
  return {
    title: `${res?.data?.title} | Pallab Kumar Sarker`,
    description: res?.data?.description,
  };
};

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const res = await getProjectDetails(projectId);

  return (
    <ContainerComponent className="mt-32">
      <ProjectDetails data={res?.data} />
    </ContainerComponent>
  );
}
