
import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { SliderPosts } from "@/shared/components/ui/Slider/SliderPost";
import { Title } from "@/shared/components/ui/Title/Title";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogSlider.module.css";

interface BlogPostsProps {
  posts: { name: string; title: string; image: string }[];
}

export const BlogSlider = ({ posts }: BlogPostsProps) => {
  return (
    <Section className={styles.root}>
      <Title>Блог</Title>
      <SliderPosts height="350px" cardWidth={350} gap={20} autoScrollSpeed={1000}>
        {posts.map((post) => (
          <Link
            key={post.name}
            href={`/blog/${post.name}`}
            className={styles.content}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={350}
              height={200}
              className={styles.image}
            />
            <p className={styles.text}>{post.title}</p>
          </Link>
        ))}
      </SliderPosts>
      <ButtonLink href="/blog" size="large" variant="primary" className={styles.button}>Все статьи</ButtonLink>
    </Section>
  );
};