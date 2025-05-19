"use client";

import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useMobileMenu } from "@/shared/stores/mobile-menu.store";
import clsx from "clsx";
import { Button } from "../../ui/Button/Button";
import styles from "./MenuButton.module.css";

export const MenuButton = () => {
  const { menuOpen, toggleMenu } = useMobileMenu();

  const handleClick = () => {
    toggleMenu();
  };

  useStopScroll(menuOpen, "mobile-menu");

  return (
    <Button
      className={clsx(styles.root, menuOpen && styles.active)}
      variant="secondary"
      size="small"
      onClick={handleClick}
    >
      <span className={clsx(styles.icon)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </span>
    </Button>
  );
};
