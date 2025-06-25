import { BlogPost } from "@/shared/components/sections/Blog/BlogPost/BlogPost";
import { FC } from "react";
interface IBlogPostPage {
  slug: string;
}

export const BlogPostScreen: FC<IBlogPostPage> = ({ slug }) => {
  return <BlogPost slug={slug} />;
};
