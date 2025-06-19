import { IBlogArticle } from "@/shared/typing/blog.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./BlogItem.module.css";

interface IBlogItem {
  post: IBlogArticle;
}
export const BlogItem: FC<IBlogItem> = ({ post }) => {
  return (
    <>
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
    </>
  );
};
