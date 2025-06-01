import { skinsService } from "@/feature/skins/skins.service";
import Image from "next/image";
import { FC } from "react";
import { SkinTitle } from "../../parts/skin/SkinTitle/SkinTitle";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./Skin.module.css";

interface ISkin {
  game: string;
  slug: string;
}

export const Skin: FC<ISkin> = async ({ game, slug }) => {
  const skin = await skinsService.getSkinBySlug(game, slug);
  if (!skin) return null;

  return (
    <Section className={styles.root}>
      <Container className={styles.container}>
        <SkinTitle title={skin.name} quality={skin.quality?.ruName} />
        <div className={styles.main}>
          
        </div>
      </Container>
      <Image
        src={"/images/product-bg.png"}
        alt={"product"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        objectFit="cover"
        className={styles.image}
      />
    </Section>
  );
};
