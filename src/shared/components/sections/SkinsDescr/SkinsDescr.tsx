import { SKINS_CONFIG } from "@/shared/content/buyskins.config";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./SkinsDescr.module.css";

interface ISkinsDescr {
  game: string;
}

export const SkinsDescr: FC<ISkinsDescr> = ({ game }) => {
  const content = SKINS_CONFIG[game];
  return (
    <>
      {content && (
        <Section>
          <Container>
            {content.blocks.map((block, index) => (
              <div className={styles.container} key={index}>
                {block.title && <p className={styles.title}>{block.title}</p>}
                {block.text && <p className={styles.text}>{block.text}</p>}
              </div>
            ))}
          </Container>
        </Section>
      )}
    </>
  );
};
