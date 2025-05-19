"use client";

import BlogCard from "@/components/cards/BlogCard";
import { NoData } from "@/components/shared/NoData";
import { TBlog, TMongoose } from "@/types/types";

const AllBlogs = ({ data }: { data: (TBlog & TMongoose)[] }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-10 px-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Latest Blogs</h1>
      </div>
      <div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-4">
            {data?.map((blog) => (
              <BlogCard data={blog} key={blog?._id} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
