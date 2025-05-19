import { getProjectDetails } from "@/services/api.services";
import ProjectDetails from "./ProjectDetails";

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
    <div className="min-h-screen mx-auto py-16 px-4">
      <ProjectDetails data={res?.data} />
    </div>
  );
}
