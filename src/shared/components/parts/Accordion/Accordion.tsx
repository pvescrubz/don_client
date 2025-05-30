"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";

import { TFaq } from "@/shared/content/lib/faq.config";
import { TUl } from "@/shared/typing/elements.type";
import { IconArraw } from "../../ui/svg/IconFilterArraw";
import styles from "./Accordion.module.css";

interface IAccordion extends TUl {
  config?: TFaq;
}

export const Accordion: FC<IAccordion> = ({ config, className, ...rest }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(0);

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    if (config && config.length > 0) {
      setOpenDropdown(0);
    }
  }, [config]);

  if (!config) return null;

  return (
    <ul className={clsx(styles.content, className)} {...rest}>
      {config.map((item, index) => (
        <li key={index} className={styles.item}>
          <button
            className={styles.title}
            onClick={() => handleOpenDropdown(index)}
          >
            <span>{item.title}</span>
            <IconArraw
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
