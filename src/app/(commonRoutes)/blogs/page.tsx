import { Metadata } from "next";
import AllBlogs from "./AllBlogs";
import { getAllBlogs } from "@/services/api.services";
import ContainerComponent from "@/components/shared/ContainerComponent";

export const metadata: Metadata = {
  title: "Portfolio | Blogs",
  description: "This is Blogs Page",
};

export default async function BlogsPage() {
  const res = await getAllBlogs();

  return (
    <ContainerComponent className="py-10 min-h-screen">
      <AllBlogs data={res?.data} />
    </ContainerComponent>
  );
}
