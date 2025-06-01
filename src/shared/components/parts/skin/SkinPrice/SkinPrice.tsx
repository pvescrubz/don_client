import { formatedPrice } from "@/shared/utils/formatedPrice";
import { FC } from "react";
import styles from "./SkinPrice.module.css";

interface ISkinPrice {
  price: string;
}

export const SkinPrice: FC<ISkinPrice> = ({ price }) => {
  return <p className={styles.root}>{formatedPrice(price)} ₽</p>;
};
