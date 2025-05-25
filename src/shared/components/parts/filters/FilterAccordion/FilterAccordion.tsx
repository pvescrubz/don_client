"use client";

import clsx from "clsx";
import { FC, useState } from "react";

import { IFilter } from "@/feature/filters/filters.type";
import { Checkbox } from "@/shared/components/parts/filters/FilterAccordion/Checkbox/Checkbox";
import { IconFilterArraw } from "@/shared/components/ui/svg/IconFilterArraw";
import { TDiv } from "@/shared/typing/elements.type";
import styles from "./FilterAccordion.module.css";

interface IFilterAccordion extends TDiv {
  item: IFilter;
}

export const FilterAccordion: FC<IFilterAccordion> = ({
  item,
  className,
  ...rest
}) => {
  const { name, ruName, data } = item;
  const [active, setAvtive] = useState<boolean>(false);
  const handleClick = () => {
    setAvtive(!active);
  };

  return (
    <>
      {data && data.length > 0 && (
        <div className={clsx(styles.root, className)} {...rest}>
          <button onClick={handleClick} className={styles.button}>
            <span className={styles.text}>{ruName ? ruName : name}</span>
            <IconFilterArraw
              className={clsx(styles.arrow, active && styles.active)}
            />
          </button>
          <div
            className={clsx(styles.accordion, active && styles.active)}
            inert={!active}
          >
            <div className={styles.wrap}>
              <div className={clsx(styles.sroll_box, "scrollbar")}>
                {data.map((item) => (
                  <Checkbox key={item.id} item={item} filter={name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
