"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { TFaq } from "@/shared/lib/faq.config";
import { TUl } from "@/shared/typing/elements.type";
import styles from "./Accordion.module.css";

interface IAccordion extends TUl {
  config?: TFaq; // Это уже массив вопросов
}

export const Accordion: FC<IAccordion> = ({ config, className, ...rest }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(0);

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    if (config && config.length > 0) {
      setOpenDropdown(0); // открываем первый элемент по умолчанию
    }
  }, [config]);

  if (!config  ) return null;

  return (
    <ul className={clsx(styles.content, className)} {...rest}>
      {config.map((item, index) => (
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