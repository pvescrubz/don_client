// components/BlogPost.tsx


import { BlogBlockRenderer } from "@/shared/components/ui/Blog/BlogRenderer/BlogRenderer";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { BlogConfig } from "@/shared/content/blog.config";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  slug: string;
}

export const BlogPost: FC<Props> = ({ slug }) => {
  const post = BlogConfig[slug];

  if (!post) {
    return notFound();
  }

  return (
    <Section>
      <Container>
         {post.content.map((block, index) => (
        <BlogBlockRenderer key={index} block={block} />
      ))}
      </Container>
    </Section>
  );
};

export default BlogPost;