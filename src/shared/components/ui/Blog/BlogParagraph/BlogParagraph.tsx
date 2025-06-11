
import { TParagraph } from "@/shared/typing/elements.type";
import { FC } from "react";
import styles from "./BlogParagraph.module.css";
interface Props {
  data: TParagraph;
}

export const BlogParagraph: FC<Props> = ({ data }) => {
  return <p className={styles.text}>{data.content}</p>;
};