import { FC } from "react";
import styles from "./BlogList.module.css";
interface Props {
  data: {
    type: "list";
    items: { content: string }[];
  };
}

export const BlogList: FC<Props> = ({ data }) => {
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
