import { skinsConfig } from "@/shared/content/buyskins.config";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./SkinsBottom.module.css";

interface ISkinsBottom {
  game: string
}



export const SkinsBottom: FC<ISkinsBottom> =  ({game}) => {
  const content = skinsConfig[game];
  return (
  <Section>
    <Container>
      {content.blocks.map((block, index) => (
          <div className={styles.container} key={index}>
            <p className={styles.title}>{block.title}</p>
            <p className={styles.text}>{block.text}</p>
          </div>
        ))}
    </Container>
  </Section>
  )
};