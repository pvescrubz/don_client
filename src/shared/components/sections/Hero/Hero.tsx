import { TDiv } from "@/shared/typing/elements.type";
import { FC } from "react";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./Hero.module.css";
import { HeroBasic } from "./HeroBasic/HeroBasic";
import { HeroSecondary } from "./HeroSecondary/HeroSecondary";

export const Hero: FC<TDiv> = () => {
  return (
    <Section className={styles.root}>
      <HeroBasic />
      <HeroSecondary />
    </Section>
  );
};
