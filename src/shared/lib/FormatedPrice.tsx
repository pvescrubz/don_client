"use client";

import { FC } from "react";
import { useCurrencyStore } from "../stores/currency.store";
import { CURRENCY, TCurrencyCode } from "../typing/currency.type";

export interface IPrices {
  USD: string;
  RUB: string;
  EUR: string;
  KZT: string;
}
interface IFormatedPrice {
  prices: IPrices;
  currency?: TCurrencyCode;
}

export const FormatedPrice: FC<IFormatedPrice> = ({ prices, currency }) => {
  const { currency: globalCurrency } = useCurrencyStore();

  const activeCurrency = currency || globalCurrency;
  const num =
    typeof prices[activeCurrency] === "string"
      ? parseFloat(prices[activeCurrency])
      : prices[activeCurrency];

  if (typeof num !== "number" || isNaN(num)) {
    return null;
  }
  return (
    <>
      {num.toLocaleString("ru-RU")} {CURRENCY[activeCurrency].symbol}
    </>
  );
};
