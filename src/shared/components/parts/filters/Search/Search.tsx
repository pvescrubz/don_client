"use client";
import { StyledInput } from "@/shared/components/forms/ui/StyledInput/StyledInput";
import { IconSearch } from "@/shared/components/ui/svg/IconSearch";
import { useFilter } from "@/shared/hooks/useFilter";
import { useScrollElementStore } from "@/shared/stores/scroll-element.store";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC, useEffect, useRef } from "react";
import styles from "./Search.module.css";

export const Search: FC<TDiv> = ({ className, ...rest }) => {
  const { singleValue, toggleSingleFilterValue } = useFilter("search");
  const ref = useRef<HTMLDivElement>(null);

  const { setElementRef } = useScrollElementStore();
  useEffect(() => {
    if (ref && ref.current) {
      setElementRef(ref);
    }
  }, [setElementRef]);

  return (
    <div className={clsx(styles.root, className)} {...rest} ref={ref}>
      <StyledInput
        className={styles.input}
        iconLeft={<IconSearch />}
        InputProps={{
          placeholder: "Поиск",
          autoComplete: "off",

          value: singleValue,
          onChange: (e) => toggleSingleFilterValue(e.target.value),
        }}
        small
      />
    </div>
  );
};
