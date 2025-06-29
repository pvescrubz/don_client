import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { FilterPriceFrom } from "./FilterPriceFrom";
import { FilterPriceTo } from "./FilterPriceTo";
import styles from "./FiltersPrice.module.css";

export const FiltersPrice: FC<TDiv> = ({ className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <FilterPriceFrom />
      <FilterPriceTo />
    </div>
  );
};
