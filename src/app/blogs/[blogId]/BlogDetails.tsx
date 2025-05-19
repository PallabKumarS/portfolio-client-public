import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { TBlog, TMongoose } from "@/types/types";
import Image from "next/image";

const BlogDetails = ({ data }: { data: TBlog & TMongoose }) => {
  const { title, content, image, category } = data;

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm border border-muted/20">
        <div className="space-y-8 p-4 md:p-8">
          {/* Title with text generation effect */}
          <TextGenerateEffect
            words={title}
            className="text-3xl md:text-4xl font-bold text-center"
          />

          {/* Blog Category */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              {category}
            </Badge>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Blog Content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-lg leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogDetails;
