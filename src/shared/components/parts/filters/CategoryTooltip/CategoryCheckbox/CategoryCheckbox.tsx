"use client";

import { ITypeData } from "@/feature/filters/filters.type";
import { IconCheck } from "@/shared/components/ui/svg/IconCheck";
import { useFilter } from "@/shared/hooks/useFilter";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import styles from "./CategoryCheckbox.module.css";

interface ICategoryCheckbox extends TButton {
  item: ITypeData;
  filter: string;
}

export const CategoryCheckbox: FC<ICategoryCheckbox> = ({
  filter,
  item,
  className,
  ...rest
}) => {
  const { name, previewSkin } = item;
  const { image } = previewSkin;
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
          <span className={styles.text_box}>
            <Image src={`/images/skins/${image}`} alt={"npg"} width={45} height={34} />
            <span className={styles.text}>{name}</span>
          </span>
          <span className={styles.box}>
            <span className={styles.icon}>
              <IconCheck className={styles.check} />
            </span>
          </span>
        </button>
      )}
    </>
  );
};
