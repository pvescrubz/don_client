import { BlogPosts } from "@/shared/components/sections/Blog/BlogPosts/BlogPosts";
import Breadcrumbs from "@/shared/components/ui/BreadCrums/BreadCrums";
import { BlogConfig } from "@/shared/content/blog.config";

export const BlogScreen = () => {
  const posts = Object.values(BlogConfig);

  return (
    <>
    <Breadcrumbs />
    <BlogPosts posts={posts} />
    </>
  )
};
