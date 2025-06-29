import Link from "next/link";
import { FC } from "react";
import styles from "./BlogNavigation.module.css";

interface Props {
  data: {
    type: "blog-navigation";
    content: {
      title: string;
      link: string;
    }[];
  };
}

export const BlogNavigation: FC<Props> = ({ data }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {data.content.map((item, i) => (
          <li key={i} className={styles.navItem}>
            <Link href={item.link} className={styles.navLink}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};