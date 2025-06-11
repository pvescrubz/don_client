import { BlogPost } from "@/shared/components/sections/Blog/BlogPost/BlogPost";
import { FC } from "react";
interface IBlogPostPage {
  slug: string;
}

export const BlogPostPage: FC<IBlogPostPage> = ({ slug }) => {
  if (!slug) return <div>fallback</div>;

  return (
    <BlogPost slug={slug}/>
  );
};

export default BlogPostPage;
