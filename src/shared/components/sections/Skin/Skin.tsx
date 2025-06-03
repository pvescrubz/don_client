import { skinsService } from "@/feature/skins/skins.service";
import Image from "next/image";
import { FC } from "react";
import { AddCartBtn } from "../../parts/skin/AddCartBtn/AddCartBtn";
import { SkinBasicInfo } from "../../parts/skin/SkinBasicInfo/SkinBasicInfo";
import { SkinDescr } from "../../parts/skin/SkinDescr/SkinDescr";
import { SkinImage } from "../../parts/skin/SkinImage/SkinImage";
import { SkinPrice } from "../../parts/skin/SkinPrice/SkinPrice";
import { SkinTitle } from "../../parts/skin/SkinTitle/SkinTitle";
import { SkinСharacteristics } from "../../parts/skin/SkinСharacteristics/SkinСharacteristics";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./Skin.module.css";

interface ISkin {
  game: string;
  slug: string;
}

export const Skin: FC<ISkin> = async ({ slug }) => {
  const skin = await skinsService.getSkinBySlug(slug);
  if (!skin) return null;

  const {
    id,
    name,
    price,
    imageUrl,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    image,
    description,
    slug: dbSlug,
    ...rest
  } = skin;

  return (
    <Section className={styles.root} key={dbSlug}>
      <Container className={styles.container}>
        <SkinTitle title={name} />

        <div className={styles.info}>
          <div className={styles.item}>
            <SkinImage imageUrl={imageUrl} />
            <div className={styles.flex}>
              <SkinPrice price={price} />
              <AddCartBtn id={id} className={styles.btn} />
            </div>
          </div>
          <div className={styles.item}>
            <SkinBasicInfo
              name={name}
              quality={skin.quality?.ruName || skin.quality?.name}
              rarity={skin.rarity?.ruName || skin.rarity?.name}
            />
            <SkinСharacteristics info={Object.values(rest)} />
          </div>
        </div>
        <SkinDescr descr={description} />
      </Container>

      <Image
        src={"/images/product-bg.png"}
        alt={"product"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.image}
      />
    </Section>
  );
};
