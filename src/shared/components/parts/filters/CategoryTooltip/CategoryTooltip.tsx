"use client";
import { ICaregoryItem } from "@/feature/filters/filters.type";
import { Button } from "@/shared/components/ui/Button/Button";
import { IconBack } from "@/shared/components/ui/svg/IconBack";
import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconArraw } from "../../../ui/svg/IconFilterArraw";
import { CategoryCheckbox } from "./CategoryCheckbox/CategoryCheckbox";
import styles from "./CategoryTooltip.module.css";

interface ICategoryTooltip {
  item: ICaregoryItem;
}

export const CategoryTooltip: FC<ICategoryTooltip> = ({ item }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowSize();
  const [leftwardShift, setLeftwardShift] = useState(false);
  const [active, setActive] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement>();

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  useEffect(() => {
    if (active && popoverRef.current && windowWidth > 1024) {
      const popoverRect = popoverRef.current.getBoundingClientRect();

      const isOverflowRight = popoverRect.right > windowWidth;
      if (isOverflowRight) {
        setLeftwardShift(true);
      }
    }
  }, [active, windowWidth]);

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

  useStopScroll(active && windowWidth <= 1024, "useCategoryTooltip");

  const { name, ruName, model } = item;

  return (
    <>
      {item && model.length > 0 && (
        <div className={clsx(styles.root, active && styles.active)}>
          <button
            onClick={handleOpen}
            ref={triggerRef}
            className={styles.button}
          >
            <span className={styles.text}>{ruName ? ruName : name}</span>
            <IconArraw className={styles.svg} />
          </button>
          {windowWidth > 1024 && (
            <div
              ref={containerRef}
              className={clsx(styles.box, {
                [styles.left]: !leftwardShift,
                [styles.right]: leftwardShift,
              })}
            >
              <div ref={popoverRef} className={styles.list} inert={!active}>
                <div className={clsx(styles.sroll_box, "scrollbar")}>
                  {model.map((item) => (
                    <CategoryCheckbox
                      key={item.id}
                      item={item}
                      filter={"model"}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {windowWidth <= 1024 && portalContainer && (
            <>
              {createPortal(
                <div
                  ref={containerRef}
                  className={clsx(styles.box, active && styles.active)}
                >
                  <div ref={popoverRef} className={styles.list} inert={!active}>
                    <Button
                      size="small"
                      variant="secondary"
                      className={styles.close}
                      onClick={handleOpen}
                    >
                      <IconBack /> Назад
                    </Button>

                    <div className={clsx(styles.sroll_box, "scrollbar")}>
                      {model.map((item) => (
                        <CategoryCheckbox
                          key={item.id}
                          item={item}
                          filter={"model"}
                        />
                      ))}
                    </div>
                  </div>
                </div>,
                portalContainer
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
