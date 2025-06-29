import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { TDiv } from "@/shared/typing/elements.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./BuySkins.module.css";

export const BuySkinsHome: FC<TDiv> = () => {
  return (
    <Section>
      <Container>
        <Title>КУПИТЬ СКИНЫ</Title>
        <ul className={styles.root}>
          <li className={styles.item}>
            <Link className={styles.link} href={APP_PAGES.SKINS_CS2.slug}>
              <Image
                src="/images/cs2.png"
                alt="alt"
                width={460}
                height={460}
                quality={90}
                className={styles.img}
              />
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href={APP_PAGES.SKINS_DOTA2.slug}>
              <Image
                src="/images/dota2.png"
                alt="alt"
                width={460}
                height={460}
                quality={90}
                className={styles.img}
              />
            </Link>
          </li>

          <li className={styles.item}>
            <Link className={styles.link} href={APP_PAGES.SKINS_RUST.slug}>
              <Image
                src="/images/rust.png"
                alt="alt"
                width={460}
                height={460}
                quality={90}
                className={styles.img}
              />
            </Link>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
