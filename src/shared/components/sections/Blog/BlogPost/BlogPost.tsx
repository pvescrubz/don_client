import { BlogBlockRenderer } from "@/shared/components/ui/Blog/BlogRenderer/BlogRenderer";
import { Breadcrumbs } from "@/shared/components/ui/BreadCrums/BreadCrums";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { BLOG_CONFIG } from "@/shared/content/blog.config";
import { FC } from "react";
import styles from "./BlogPost.module.css";
interface Props {
  slug: string;
}

export const BlogPost: FC<Props> = ({ slug }) => {
  const post = BLOG_CONFIG[slug];
  const customNames = { [slug]: post.title };

  return (
    <>
      <Breadcrumbs customNames={customNames} />
      <Section>
        <Container className={styles.box}>
          {post.content.map((block, index) => (
            <BlogBlockRenderer key={index} block={block} />
          ))}
        </Container>
      </Section>
    </>
  );
};

export default BlogPost;
