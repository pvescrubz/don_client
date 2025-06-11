import { FC } from "react";
import styles from "./BlogHeading.module.css";

type ValidHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  data: {
    type: "heading";
    level: number;
    content: string;
  };
}

export const BlogHeading: FC<Props> = ({ data }) => {
  const Tag = `h${data.level}` as ValidHeadingTag;

  return <Tag className={styles.heading}>{data.content}</Tag>;
};