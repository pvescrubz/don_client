import { ICartSkin } from "@/feature/cart/cart.type";
import { FC } from "react";
import { CartListItem } from "../CartListItem/CartListItem";
import styles from "./CartList.module.css";

interface ICartList {
  skins: ICartSkin[];
}
export const CartList: FC<ICartList> = ({ skins }) => {
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <p>Предмет</p>
        <p className={styles.amount}>Стоимость</p>
      </div>
      <ul className={styles.list}>
        {skins.map((skin) => (
          <CartListItem key={skin.id} skin={skin} />
        ))}
      </ul>
    </div>
  );
};
