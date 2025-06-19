// components/BlogPosts.tsx

import { Breadcrumbs } from "@/shared/components/ui/BreadCrums/BreadCrums";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { IBlogArticle } from "@/shared/typing/blog.type";
import { BlogItem } from "../BlogItem/BlogItem";
import styles from "./BlogPosts.module.css";

interface BlogPostsProps {
  posts: IBlogArticle[];
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <>
 <Breadcrumbs />
    <Section className={styles.root}>
      <Container className={styles.container}>
        <BlogItem posts={posts}/>
      </Container>
    </Section>
</>
   
  );
};