"use client";
import { StyledInput } from "@/shared/components/ui/StyledInput/StyledInput";
import { useFilter } from "@/shared/hooks/useFilter";
import { FC } from "react";

export const FilterPriceFrom: FC = () => {
  const { singleValue, toggleSingleFilterValue } = useFilter("priceFrom");
  
  return (
    <StyledInput
      InputProps={{
        placeholder: "Цена от",
        autoComplete: "off",
        value: singleValue,
        onChange: (e) => toggleSingleFilterValue(e.target.value, /[^0-9]/g),
      }}
      small
      centred
    />
  );
};
