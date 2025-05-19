import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TDiv } from "@/shared/typing/elements.type";
import { FC } from "react";
import styles from "./HeroBasic.module.css";

export const HeroBasic: FC<TDiv> = () => {
  return (
    <>
      <div className={styles.root}>
        <picture className={styles.fire}>
          <source
            media="(max-width: 1024px)"
            className={styles.fire}
            srcSet="/images/hero-bg.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1025px)"
            className={styles.image}
            src="/images/1x1.webp"
            type="image/webp"
          />
          <img
            src="/images/1x1.webp"
            alt="Hero Background"
            className={styles.fire}
          />
        </picture>
        <picture className={styles.image}>
          <source
            media="(max-width: 1024px)"
            className={styles.image}
            srcSet="/images/hero-m.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1025px)"
            className={styles.image}
            srcSet="/images/hero-l.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-l.webp"
            alt="Hero Background"
            className={styles.image}
          />
        </picture>
        <Container className={styles.wrapper}>
          <h1 className={styles.title}>КУПИТЬ СКИНЫ CS2 & DOTA 2</h1>
          <p className={styles.text}>
            Получи уникальные скины которые выделят тебя на поле боя! Широкий
            выбор редких предметов, доступные цены и мгновенная доставка.
          </p>
          <div className={styles.buttons_wrapper}>
            <ButtonLink
              href="/skins"
              size="large"
              variant="primary"
              className={styles.red_btn}
            >
              КУПИТЬ СКИНЫ
            </ButtonLink>
            <ButtonLink
              href="/skins"
              size="large"
              variant="secondary"
              className={styles.gray_btn}
            >
              КУПИТЬ ВАЛЮТУ
            </ButtonLink>
          </div>
        </Container>
      </div>
    </>
  );
};
