import {
  TCatalogSkin,
  TKillCounter,
  TSouvenir,
} from "@/feature/skins/skins.type";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IconCartSmall } from "../svg/IconCartSmall";
import styles from "./ProductCard.module.css";

interface IProductCard extends TDiv {
  skin: TCatalogSkin;
}

interface IStatTagProps {
  killCounter?: TKillCounter;
  souvenir?: TSouvenir;
}

export const Top: FC<IStatTagProps> = ({ killCounter, souvenir }) => {
  if (killCounter?.flag)
    return <p className={styles.top}>{killCounter.ruName}</p>;
  if (souvenir?.flag) return <p className={styles.top}>{souvenir.ruName}</p>;
  return (killCounter || souvenir) && <p className={styles.top} />;
};

export const ProductCard: FC<IProductCard> = ({ skin, className, ...rest }) => {
  const { name, price, imageUrl, slug, killCounter, souvenir } = skin;

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <Top killCounter={killCounter} souvenir={souvenir} />
      <div className={styles.box}>
        <Image
          src={imageUrl}
          alt={"name"}
          width={300}
          height={225}
          className={styles.img}
        />
        <div className={styles.descr}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price} ₽</p>
        </div>
        <button className={styles.button}>
          <IconCartSmall />В корзину
        </button>
      </div>

      <Link href={`/skin/${slug}`} className={styles.link} />
    </div>
  );
};
