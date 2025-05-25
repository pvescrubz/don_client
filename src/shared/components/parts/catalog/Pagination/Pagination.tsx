"use client";

import { TMeta } from "@/feature/skins/skins.type";
import { IconFilterArraw } from "@/shared/components/ui/svg/IconFilterArraw";
import { useFilter } from "@/shared/hooks/useFilter";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { useScrollElementStore } from "@/shared/stores/scroll-element.store";
import { FC } from "react";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import { PaginationDots } from "../PaginationButton/PaginationDots";
import styles from "./Pagination.module.css";
interface IPagination {
  meta: TMeta;
}

export const Pagination: FC<IPagination> = ({ meta }) => {
  const { currentPage, totalPages } = meta;
  const { toggleSingleFilterValue } = useFilter("page", false, 0);
  const { elementRef } = useScrollElementStore();
  const width = useWindowSize();

  if (totalPages <= 1) return null;

  const visiblePageCount = width >= 1024 ? 5 : 3;
  let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
  let endPage = startPage + visiblePageCount - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visiblePageCount + 1);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handleClick = (page: number) => {
    toggleSingleFilterValue(page.toString());
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div className={styles.root}>
      {currentPage !== 1 && (
        <PaginationButton onClick={() => handleClick(currentPage - 1)}>
          <IconFilterArraw className={styles.prev} />
        </PaginationButton>
      )}
      {visiblePages[0] !== 1 && (
        <PaginationButton
          value={1}
          active={currentPage === 1}
          onClick={() => handleClick(1)}
        />
      )}
      {currentPage >= visiblePageCount && <PaginationDots />}
      {visiblePages.map((page) => (
        <PaginationButton
          key={page}
          value={page}
          active={currentPage === page}
          onClick={() => handleClick(page)}
        />
      ))}
      {currentPage <= totalPages - visiblePageCount + 1 && <PaginationDots />}
      {visiblePages[visiblePages.length - 1] !== totalPages && (
        <PaginationButton
          value={totalPages}
          active={currentPage === totalPages}
          onClick={() => handleClick(totalPages)}
        />
      )}
      {currentPage !== totalPages && (
        <PaginationButton onClick={() => handleClick(currentPage + 1)}>
          <IconFilterArraw className={styles.next} />
        </PaginationButton>
      )}
    </div>
  );
};
