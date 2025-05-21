"use client";
import { StyledInput } from "@/shared/components/ui/StyledInput/StyledInput";
import { IconSearch } from "@/shared/components/ui/svg/IconSearch";
import { useFilterInput } from "@/shared/hooks/useFilterInput";
import { FC } from "react";
import styles from "./Search.module.css";

export const Search: FC = () => {
  const { singleValue, toggleSingleFilterValue } = useFilterInput("search");

  return (
    <div className={styles.root}>
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
