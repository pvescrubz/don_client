import { FormatedPrice } from "@/shared/lib/FormatedPrice";
import { FC } from "react";
import styles from "./SkinPrice.module.css";

interface ISkinPrice {
  price: string | number;
}

export const SkinPrice: FC<ISkinPrice> = ({ price }) => {
  return (
    <p className={styles.root}>
      <FormatedPrice price={price} />
    </p>
  );
};
