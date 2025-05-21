"use client";
import { StyledInput } from "@/shared/components/ui/StyledInput/StyledInput";
import { useFilterInput } from "@/shared/hooks/useFilterInput";
import { FC } from "react";

export const FilterPriceTo: FC = () => {
  const { singleValue, toggleSingleFilterValue } = useFilterInput("priceTo");

  return (
    <StyledInput
      InputProps={{
        placeholder: "Цена до",
        autoComplete: "off",
        value: singleValue,
        onChange: (e) => toggleSingleFilterValue(e.target.value, /[^0-9]/g),
      }}
      small
      centred
    />
  );
};
