
import { FC } from "react";
import styles from "./BlogNestedList.module.css";

interface Props {
  data: {
    type: "nested-list";
    items: { content: string }[];
  };
}

export const BlogNestedList: FC<Props> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.items.map((item, i) => (
        <li key={i} className={styles.listItem}>
          {item.content}
        </li>
      ))}
    </ul>
  );
};