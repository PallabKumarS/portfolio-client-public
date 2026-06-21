import { Metadata } from "next";
import AllBlogs from "./AllBlogs";
import { getAllBlogs } from "@/services/api.services";

export const metadata: Metadata = {
  title: "Portfolio | Blogs",
  description: "This is Blogs Page",
};

export default async function BlogsPage() {
  const res = await getAllBlogs();

  return (
    <div className="container mx-auto py-10 md:px-5 min-h-screen">
      <AllBlogs data={res?.data} />
    </div>
  );
}
