import { FC } from "react";
import { FilterPriceFrom } from "./FilterPriceFrom";
import { FilterPriceTo } from "./FilterPriceTo";
import styles from "./FiltersPrice.module.css";

export const FiltersPrice: FC = () => {
  return (
    <div className={styles.root}>
      <FilterPriceFrom />
      <FilterPriceTo />
    </div>
  );
};
