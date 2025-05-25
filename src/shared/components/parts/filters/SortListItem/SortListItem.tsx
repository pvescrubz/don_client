"use client";
import { ISortItem } from "@/feature/filters/sort.type";
import { IconFilterArraw } from "@/shared/components/ui/svg/IconFilterArraw";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { SORT_SVG_MAP } from "../SortButton/SortButton";
import styles from "./SortListItem.module.css";

interface ISortButton extends TButton {
  item: ISortItem;
  active?: boolean;
}

export const SortListItem: FC<ISortButton> = ({ item, active, ...rest }) => {
  return (
    <>
      <button className={clsx(styles.root, active && styles.active)} {...rest}>
        {SORT_SVG_MAP[item.name] && SORT_SVG_MAP[item.name]}
        <span className={styles.span}>{item.ruName}</span>
        <IconFilterArraw className={styles.svg} />
      </button>
    </>
  );
};
