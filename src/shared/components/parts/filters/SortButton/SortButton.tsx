
"use client";
import { ISortItem, TSortName } from "@/feature/filters/sort.type";
import { Button } from "@/shared/components/ui/Button/Button";
import { IconArraw } from "@/shared/components/ui/svg/IconFilterArraw";
import { IconSortHighToLow } from "@/shared/components/ui/svg/IconSortHighToLow";
import { IconPriceLowToHigh } from "@/shared/components/ui/svg/IconSortLowToHigh";
import { IconSortPopular } from "@/shared/components/ui/svg/IconSortPopular";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import styles from "./SortButton.module.css";

interface ISortButton extends TButton {
  item: ISortItem;
  active?: boolean;
}

export const SORT_SVG_MAP = {
  asc: <IconPriceLowToHigh />,
  desc: <IconSortHighToLow />,
  popular: <IconSortPopular />,
} satisfies Record<TSortName, ReactNode>;

export const SortButton: FC<ISortButton> = ({ item, active, ...rest }) => {
  return (
    <>
      <Button
        size="small"
        variant="secondary"
        className={styles.button}
        {...rest}
      >
        <span className={styles.span}>
          {SORT_SVG_MAP[item.name]}
          {item.ruName}
        </span>
        <IconArraw
          className={clsx(styles.arrow, active && styles.active)}
        />
      </Button>
    </>
  );
};
