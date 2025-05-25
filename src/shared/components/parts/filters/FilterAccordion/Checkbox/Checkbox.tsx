"use client";

import { IFilter } from "@/feature/filters/filters.type";
import { IconCheck } from "@/shared/components/ui/svg/IconCheck";
import { useFilter } from "@/shared/hooks/useFilter";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Checkbox.module.css";

interface ICheckbox extends TButton {
  item: IFilter;
  filter: string;
}

export const Checkbox: FC<ICheckbox> = ({
  filter,
  item,
  className,
  ...rest
}) => {
  const { name, ruName } = item;

  const { isActive, toggleMultiFilterValue } = useFilter(filter, true);
  return (
    <>
      {name && (
        <button
          type="button"
          className={clsx(
            styles.root,
            className,
            isActive(name) && styles.active
          )}
          onClick={() => toggleMultiFilterValue(name)}
          {...rest}
        >
          <span className={styles.box}>
            <span className={styles.icon}>
              <IconCheck className={styles.check} />
            </span>
          </span>
          <span className={styles.text}>{ruName ? ruName : name}</span>
        </button>
      )}
    </>
  );
};
