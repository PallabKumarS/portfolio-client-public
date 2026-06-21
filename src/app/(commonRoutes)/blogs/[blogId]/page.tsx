import { getBlogDetails } from "@/services/api.services";
import BlogDetails from "./BlogDetails";

// generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await getBlogDetails(blogId);

  return {
    title: `${res?.data?.title} | Pallab Kumar Sarker`,
    description: res?.data?.content.slice(0, 160),
  };
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await getBlogDetails(blogId);

  return (
    <div className="min-h-screen mx-auto py-16 px-4">
      <BlogDetails data={res?.data} />
    </div>
  );
}
