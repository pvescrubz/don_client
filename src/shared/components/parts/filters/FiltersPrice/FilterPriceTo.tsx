"use client";
import { StyledInput } from "@/shared/components/forms/ui/StyledInput/StyledInput";
import { useFilter } from "@/shared/hooks/useFilter";
import { FC } from "react";

export const FilterPriceTo: FC = () => {
  const { singleValue, toggleSingleFilterValue } = useFilter("priceTo");

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
