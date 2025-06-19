
import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { SliderPosts } from "@/shared/components/ui/Slider/SliderPost";
import { Title } from "@/shared/components/ui/Title/Title";
import { BlogPostsProps } from "@/shared/typing/blog.type";
import { BlogItem } from "../BlogItem/BlogItem";
import styles from "./BlogSlider.module.css";


export const BlogSlider  = ({ posts }: BlogPostsProps) => {
  return (
    <Section className={styles.root}>
      <Title>Блог</Title>
      <SliderPosts height="350px" cardWidth={350} gap={20} autoScrollSpeed={1000}>
          <BlogItem posts={posts}/>
      </SliderPosts>
      <ButtonLink href="/blog" size="large" variant="primary" className={styles.button}>Все статьи</ButtonLink>
    </Section>
  );
};