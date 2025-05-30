import { skinsConfig } from "@/shared/content/buyskins.config";
import Image from "next/image";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./SkinsHead.module.css";

interface ISkinsHead {
    game: string;
}


export const SkinsHead: FC<ISkinsHead> = ({game}) => {
   const content = skinsConfig[game];
  return (
    <Section className={styles.root}>
      <Container className={styles.container}>
      <Title className={styles.title}>{content.mainTitle}</Title>
      <Image src={content.bgimage} width={550} height={367} alt={content.bgimage} className={styles.bgimage} />
      </Container>
    </Section>
  );
};
