import { ISortItem } from "@/feature/filters/sort.type";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { FiltersPrice } from "../FiltersPrice/FiltersPrice";
import { GameNavBtnGroup } from "../GameNavBtnGroup/GameNavBtnGroup";
import { Search } from "../Search/Search";
import { Sort } from "../Sort/Sort";
import styles from "./FiltersTopGroup.module.css";

interface IFiltersTopGroup extends TDiv {
  sort?: ISortItem[];
}

export const FiltersTopGroup: FC<IFiltersTopGroup> = ({
  sort,
  className,
  ...rest
}) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <FiltersPrice className={styles.price} />
      <GameNavBtnGroup />
      <Search className={styles.search} />
      {sort && <Sort sort={sort} />}
    </div>
  );
};
