/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use, useState } from "react";
import BlogAdminCard from "@/components/cards/BlogAdminCard";
import BlogForm from "@/components/forms/BlogForm";
import { Modal } from "@/components/shared/Modal";
import { NoData } from "@/components/shared/NoData";
import { Button } from "@/components/ui/button";
import { TBlog, TMongoose } from "@/types/types";

const AdminBlogPage = ({ dataPromise }: { dataPromise: Promise<any> }) => {
  const response = use(dataPromise);
  const data: (TBlog & TMongoose)[] = response?.data ?? [];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">All Blogs</h1>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Create Blog"
          content={<BlogForm setIsOpen={setIsOpen} />}
          trigger={<Button variant="secondary">Add Blog</Button>}
        />
      </div>
      <div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-4">
            {data?.map((blog) => (
              <BlogAdminCard edit={true} data={blog} key={blog?._id} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AdminBlogPage;
