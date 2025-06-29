"use client";

import { FC } from "react";
import { useConvertPrice } from "../hooks/useConvertPrice";
import { useCurrencyStore } from "../stores/currency.store";
import { CURRENCY, TCurrencyCode } from "../typing/currency.type";

interface IFormatedPrice {
  price: string | number;
  currency?: TCurrencyCode;
  needConvert?: boolean;
}

export const FormatedPrice: FC<IFormatedPrice> = ({
  price,
  currency,
  needConvert = true,
}) => {
  const { currency: globalCurrency } = useCurrencyStore();
  const activeCurrency = currency || globalCurrency;

  const { convert } = useConvertPrice();

  return (
    <>
      {!needConvert && price.toLocaleString("ru-RU")}{" "}
      {needConvert &&
        convert(price, "RUB", activeCurrency).toLocaleString("ru-RU")}{" "}
      {CURRENCY[activeCurrency].symbol}
    </>
  );
};
