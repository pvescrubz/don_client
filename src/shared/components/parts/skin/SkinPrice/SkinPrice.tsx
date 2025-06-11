import { FormatedPrice, IPrices } from "@/shared/lib/FormatedPrice";
import { FC } from "react";
import styles from "./SkinPrice.module.css";

interface ISkinPrice {
  prices: IPrices;
}

export const SkinPrice: FC<ISkinPrice> = ({ prices }) => {
  return (
    <p className={styles.root}>
      <FormatedPrice prices={prices} />
    </p>
  );
};
