import { Breadcrumbs } from "@/shared/components/ui/BreadCrums/BreadCrums";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { Title } from "@/shared/components/ui/Title/Title";
import { IBlogArticle } from "@/shared/typing/blog.type";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPosts.module.css";

interface BlogPostsProps {
  posts: IBlogArticle[];
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <>
      <Breadcrumbs />
      <Section className={styles.root}>
        <Container>
          <Title>Блог</Title>
          <div className={styles.container}>
            {posts.map((post) => (
              <Link
                key={post.name}
                href={`/blog/${post.name}`}
                className={styles.content}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={700}
                  height={417}
                  className={styles.image}
                />
                <p className={styles.text}>{post.title}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};
