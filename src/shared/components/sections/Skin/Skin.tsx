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
import { Breadcrumbs } from "../../ui/BreadCrums/BreadCrums";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./Skin.module.css";

interface ISkin {
  game: string;
  slug: string;
}

export const Skin: FC<ISkin> = async ({ slug }) => {
  const skin = await skinsService.getSkinBySlug(slug, true);
  if (!skin) return null;

  const { id, name, price, image, description, slug: dbSlug, ...rest } = skin;

  const characteristics = Object.values(rest).filter(
    (value) => typeof value === "object"
  );

  const customNames = { [slug]: name };
  return (
    <div className={styles.bg}>
      <Breadcrumbs customNames={customNames} />
      <Section className={styles.root} key={dbSlug}>
        <Container className={styles.container}>
          <SkinTitle title={name} />
          <div className={styles.info}>
            <div className={styles.item}>
              <SkinImage imageUrl={image} />
              <div className={styles.flex}>
                <SkinPrice price={price} />
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
      </Section>
      <Image
        src={"/images/product-bg.png"}
        alt={"product"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.image}
      />
    </div>
  );
};
