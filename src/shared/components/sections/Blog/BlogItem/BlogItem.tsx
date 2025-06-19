import { BlogPostsProps } from "@/shared/typing/blog.type";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogItem.module.css";



export const BlogItem = ({ posts }: BlogPostsProps) => {
  return (
    <>
    
     {posts.map((posts) => (
          <Link
            key={posts.name}
            href={`/blog/${posts.name}`}
            className={styles.content}
          >
            <Image
              src={posts.image}
              alt={posts.title}
              width={350}
              height={200}
              className={styles.image}
            />
            <p className={styles.text}>{posts.title}</p>
          </Link>
        ))}

    
       </>
    
  );
}