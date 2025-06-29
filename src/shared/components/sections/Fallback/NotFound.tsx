import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { TDiv } from "@/shared/typing/elements.type";
import Image from "next/image";
import { FC } from "react";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./NotFound.module.css";

export const NotFound: FC<TDiv> = () => {
  return (
    <Section className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Страница не найдена</p>
      <ButtonLink
        href={APP_PAGES.HOME.slug}
        size="small"
        className={styles.button}
      >
        На главную
      </ButtonLink>
      <Image
        src="/images/404bg.png"
        fill
        alt="404"
        className={styles.image}
        priority
      />
    </Section>
  );
};
