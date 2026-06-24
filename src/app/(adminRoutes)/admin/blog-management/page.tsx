import { Metadata } from "next";
import AdminBlogPage from "./AdminBlogPage";
import { getAllBlogs } from "@/services/blog.service";
import { Suspense } from "react";
import { LoaderComponent } from "@/components/shared/LoaderComponent";
import ContainerAdminComponent from "@/components/shared/ContainerAdminComponent";

export const metadata: Metadata = {
  title: "Dashboard | Blog Management",
  description: "Add, Edit, Delete, View Blogs",
};

const BlogManagementPage = () => {
  const blogsPromise = getAllBlogs();

  return (
    <ContainerAdminComponent>
      <Suspense fallback={<LoaderComponent centered size="xl" />}>
        <AdminBlogPage dataPromise={blogsPromise} />
      </Suspense>
    </ContainerAdminComponent>
  );
};

export default BlogManagementPage;
