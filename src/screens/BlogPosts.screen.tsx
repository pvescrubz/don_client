import { BlogPosts } from "@/shared/components/sections/Blog/BlogPosts/BlogPosts";
import { BlogConfig } from "@/shared/content/blog.config";
import { FC } from "react";

export const BlogScreen: FC = () => {
  const posts = Object.values(BlogConfig);

  return <BlogPosts posts={posts} />;
};
