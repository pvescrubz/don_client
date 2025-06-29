"use client";

import { Button } from "@/shared/components/ui/Button/Button";
import { useFiltersClear } from "@/shared/stores/filters-clear.store";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./FiltersClearButton.module.css";

export const FiltersClearButton: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleNeedClear } = useFiltersClear();

  const handleClearFilters = () => {
    if (pathname) {
      toggleNeedClear(true);
      router.push(pathname, { scroll: false });
    }
  };

  return (
    <Button
      size="small"
      variant="secondary"
      onClick={handleClearFilters}
      className={styles.root}
    >
      СБРОСИТЬ ФИЛЬТРЫ
    </Button>
  );
};
