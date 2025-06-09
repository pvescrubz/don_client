import { ICartSkin } from "@/feature/cart/cart.type";
import { formatedPrice } from "@/shared/utils/formatedPrice";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./CartListItem.module.css";
import { CartListItemDelete } from "./CartListItemBtn";

interface ICartListItem {
  skin: ICartSkin;
}

export const CartListItem: FC<ICartListItem> = ({ skin }) => {
  const { image, name, price, id, rarity, exterior, game, slug } = skin;

  return (
    <li className={styles.root}>
      <div className={styles.left}>
        <div className={styles.image_box}>
          <Image
            src={`/images/skins/${image}`}
            alt={name}
            width={66}
            height={50}
            className={styles.image}
          />
        </div>
        <div className={styles.descr}>
          <div className={clsx(styles.name_group)}>
            <Link href={`/skin/${game.name}/${slug}`} className={styles.name}>
              <span className={styles.span}>{name}</span>
            </Link>
            {game.name === "cs2" && exterior && (
              <p className={styles.extra}>
                {exterior.ruName ? exterior.ruName : exterior.name}
              </p>
            )}
            {game.name === "dota2" && rarity && (
              <p className={styles.extra}>
                {rarity.ruName ? rarity.ruName : rarity.name}
              </p>
            )}
          </div>
          <p className={styles.price}>{formatedPrice(price)} ₽</p>
        </div>
      </div>

      <CartListItemDelete className={styles.delete} skinId={id} />
    </li>
  );
};
