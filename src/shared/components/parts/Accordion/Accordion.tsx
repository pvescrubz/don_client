"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";

import { TUl } from "@/shared/typing/elements.type";
import Image from "next/image";
import styles from "./Accordion.module.css";


export type TAccordionItem = {
  title: string;
  descr: string;
};
interface IAccordion extends TUl {
  items: TAccordionItem[];
}


export const Accordion: FC<IAccordion> = ({ items, className, ...rest }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(0);

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    if (items && items.length > 0) {
      setOpenDropdown(0);
    }
  }, [items]);

  return (
    <ul className={clsx(styles.content, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <button
            className={styles.title}
            onClick={() => handleOpenDropdown(index)}
          >
            <span>{item.title}</span>
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              width={12}
              height={7}
              className={clsx(
                styles.icon,
                openDropdown === index && styles.open
              )}
            />
          </button>
          <div
            className={clsx(
              styles.descr,
              openDropdown === index && styles.open
            )}
          >
            <p>{item.descr}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
