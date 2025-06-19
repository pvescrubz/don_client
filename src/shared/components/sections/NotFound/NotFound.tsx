
import Image from "next/image";
import { FC } from "react";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./NotFound.module.css";


export const NotFound: FC = () => {
 

  return (
    <Section className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Страница не найдена</p>
      <Image src="/images/404bg.webp" fill alt="404" className={styles.image} priority/>
    </Section>
  );
};
