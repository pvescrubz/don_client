
import { FC } from "react";
import styles from "./BlogOrderedList.module.css";




interface Props {
  data: {
    type: "ordered-list";
    items: { content: string }[];
  };
}

export const BlogOrderedList: FC<Props> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.items.map((li, i) => (
        <li key={i} className={styles.listItem}>
          {li.content}
        </li>
      ))}
    </ul>
  );
};