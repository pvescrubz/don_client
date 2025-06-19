import { BlogPosts } from "@/shared/components/sections/Blog/BlogPosts/BlogPosts";
import { BlogConfig } from "@/shared/content/blog.config";

export const BlogScreen = () => {
  const posts = Object.values(BlogConfig);

  return (
    <>
      <BlogPosts posts={posts} />
    </>
  );
};
