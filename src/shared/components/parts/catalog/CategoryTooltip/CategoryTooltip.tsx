"use client";
import { ICaregoryItem } from "@/shared/typing/filters.type";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";
import { IconFilterArraw } from "../../../ui/svg/IconFilterArraw";
import { CategoryCheckbox } from "./CategoryCheckbox/CategoryCheckbox";
import styles from "./CategoryTooltip.module.css";

interface ICategoryTooltip {
  item: ICaregoryItem;
}

export const CategoryTooltip: FC<ICategoryTooltip> = ({ item }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftwardShift, setLeftwardShift] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && popoverRef.current) {
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      const isOverflowRight = popoverRect.right > viewportWidth;
      if (isOverflowRight) {
        setLeftwardShift(true);
      }
    }
  }, [active]);

  const handleOpen = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const isInTrigger = triggerRef.current?.contains(target);
      const isInPopover = containerRef.current?.contains(target);

      if (!isInTrigger && !isInPopover) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);


  const { name, ruName, type } = item;

  return (
    <>
      {item && type.length > 0 && (
        <div className={clsx(styles.root, active && styles.active)}>
          <button
            onClick={handleOpen}
            ref={triggerRef}
            className={styles.button}
          >
            <span className={styles.text}>{ruName ? ruName : name}</span>
            <IconFilterArraw className={styles.svg} />
          </button>

          <div
            ref={containerRef}
            className={clsx(styles.box, {
              [styles.left]: !leftwardShift,
              [styles.right]: leftwardShift,
            })}
          >
            <div ref={popoverRef} className={styles.list} inert={!active}>
              <div className={clsx(styles.sroll_box, "scrollbar")}>
                {type.map((item) => (
                  <CategoryCheckbox key={item.id} item={item} filter={"type"} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
