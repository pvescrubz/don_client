"use client";
import { ISortItem } from "@/feature/filters/sort.type";
import { useFilter } from "@/shared/hooks/useFilter";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC, useState } from "react";
import { SortButton } from "../SortButton/SortButton";
import { SortListItem } from "../SortListItem/SortListItem";
import styles from "./Sort.module.css";

interface ICatalogTopGroup extends TDiv {
  sort: ISortItem[];
}

export const Sort: FC<ICatalogTopGroup> = ({ sort, className, ...rest }) => {
  const { isActive, toggleSingleFilterValue } = useFilter("sort", false, 0);

  const activeItem = sort?.find((item) => isActive(item.name));
  const displayedItem = activeItem ? activeItem : sort?.[0];

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (name: string) => {
    toggleSingleFilterValue(name);
    setOpen(false);
  };

  return (
    <>
      {sort && (
        <div
          className={clsx(styles.root, open && styles.active, className)}
          {...rest}
        >
          <SortButton item={displayedItem} active={open} onClick={handleOpen} />

          <div className={styles.box}>
            <div className={styles.list} inert={!open}>
              {sort.map((item) => (
                <SortListItem
                  key={item.id}
                  item={item}
                  active={
                    activeItem ? isActive(item.name) : item.name === "popular"
                  }
                  onClick={() => handleClick(item.name)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
