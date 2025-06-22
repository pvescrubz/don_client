import { Breadcrumbs } from "@/shared/components/ui/BreadCrums/BreadCrums";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { Title } from "@/shared/components/ui/Title/Title";
import { BLOG_CONFIG } from "@/shared/content/blog.config";
import { BlogItem } from "../BlogItem/BlogItem";
import styles from "./BlogPosts.module.css";

export const BlogPosts = () => {
  const posts = Object.values(BLOG_CONFIG);

  return (
    <>
      <Breadcrumbs />
      <Section>
        <Title>Наш Блог</Title>
        <Container>
          <div className={styles.root}>
            {posts.map((post) => (
              <BlogItem key={post.name} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};
