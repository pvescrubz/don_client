"use client";

import { Button } from "@/shared/components/ui/Button/Button";
import { usePriceRangeClear } from "@/shared/stores/price-range.store";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

export const FiltersClearButton: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleNeedClear } = usePriceRangeClear();

  const handleClearFilters = () => {
    if (pathname) {
      toggleNeedClear(true);
      router.push(pathname, { scroll: false });
    }
  };

  return (
    <Button size="small" variant="secondary" onClick={handleClearFilters}>
      СБРОСИТЬ ФИЛЬТРЫ
    </Button>
  );
};
