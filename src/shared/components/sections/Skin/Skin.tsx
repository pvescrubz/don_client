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
    priceUSD,
    priceRUB,
    priceEUR,
    priceKZT,
    image,
    description,
    slug: dbSlug,
    ...rest
  } = skin;

  const prices = { USD: priceUSD, RUB: priceRUB, EUR: priceEUR, KZT: priceKZT };

  const characteristics = Object.values(rest).filter(
    (value) => typeof value === "object"
  );

  return (
    <Section className={styles.root} key={dbSlug}>
      <Container className={styles.container}>
        <SkinTitle title={name} />

        <div className={styles.info}>
          <div className={styles.item}>
            <SkinImage imageUrl={image} />
            <div className={styles.flex}>
              <SkinPrice prices={prices} />
              <AddCartBtn skinId={id} className={styles.btn} />
            </div>
          </div>
          <div className={styles.item}>
            <SkinBasicInfo
              name={name}
              quality={skin.exterior?.ruName || skin.exterior?.name}
              rarity={skin.rarity?.ruName || skin.rarity?.name}
            />
            <SkinСharacteristics characteristics={characteristics} />
          </div>
        </div>
        {description && <SkinDescr descr={description} />}
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
