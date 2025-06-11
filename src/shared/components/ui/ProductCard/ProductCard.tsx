import { ICatalogSkin, ISpecificallyField } from "@/feature/skins/skins.type";
import { FormatedPrice } from "@/shared/lib/FormatedPrice";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./ProductCard.module.css";
import { ProductDynamicCartBtn } from "./ProductDynamicCartBtn";

interface IStatTagProps {
  killCounter?: ISpecificallyField;
  souvenir?: ISpecificallyField;
}
interface IProductCard extends TDiv {
  skin: ICatalogSkin;
}

export const Top: FC<IStatTagProps> = ({ killCounter, souvenir }) => {
  if (killCounter?.flag)
    return <p className={styles.top}>{killCounter.ruName}</p>;
  if (souvenir?.flag) return <p className={styles.top}>{souvenir.ruName}</p>;
  return <p className={styles.top} />;
};

export const ProductCard: FC<IProductCard> = ({ skin, className, ...rest }) => {
  const {
    name,
    priceUSD,
    priceRUB,
    priceEUR,
    priceKZT,
    id,
    image,
    slug,
    killCounter,
    souvenir,
    game,
  } = skin;

  const prices = { USD: priceUSD, RUB: priceRUB, EUR: priceEUR, KZT: priceKZT };

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <Top killCounter={killCounter} souvenir={souvenir} />
      <div className={styles.box}>
        <Image
          src={`/images/skins/${image}`}
          alt={"name"}
          width={300}
          height={225}
          className={styles.img}
        />
        <div className={styles.descr}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>
            <FormatedPrice prices={prices} />
          </p>
        </div>
        <ProductDynamicCartBtn className={styles.button} skinId={id} />
      </div>

      <Link href={`/skin/${game.name}/${slug}`} className={styles.link} />
    </div>
  );
};
