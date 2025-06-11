/* eslint-disable @next/next/no-img-element */


import { FC } from "react";
import styles from "./BlogImage.module.css";

interface Props {
  data: {
    type: "image";
    content: string;
  };
}

export const BlogImage: FC<Props> = ({ data }) => {
  return (
    <div className={styles.imageWrapper}>
      <img
        src={data.content}
        alt=""
        className={styles.image}
      />
    </div>
  );
};