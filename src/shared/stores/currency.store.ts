import { ICurrencyRate } from "@/feature/currency/currency.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TCurrencyCode } from "../typing/currency.type";
import { setCookie } from "../utils/cookies";
import { getInitialCurrency } from "../utils/getInitialCurrency";

interface ICurrencyStore {
  currency: TCurrencyCode;
  setCurrency: (value: TCurrencyCode) => void;
  currencyRates: ICurrencyRate;
  setCurrencyRates: (value: ICurrencyRate) => void;
}

export const useCurrencyStore = create<ICurrencyStore>()(
  devtools(
    (set) => ({
      currency: getInitialCurrency(),
      setCurrency: (value) =>
        set(() => {
          setCookie("currency", value, {
            days: 7,
            path: "/",
          });
          return { currency: value };
        }),
      currencyRates: { RUB: 1 },
      setCurrencyRates: (value) => set({ currencyRates: value }),
    }),
    {
      name: "useCurrencyStore",
    }
  )
);
