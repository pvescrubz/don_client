// app/blog/page.tsx

import { BlogPosts } from "@/shared/components/sections/Blog/BlogPosts/BlogPosts";
import { BlogConfig } from "@/shared/content/blog.config";

export default function BlogListPage() {
  const posts = Object.values(BlogConfig);

  return <BlogPosts posts={posts} />;
}