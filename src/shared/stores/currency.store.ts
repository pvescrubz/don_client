import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TCurrencyCode } from "../typing/currency.type";
import { setCookie } from "../utils/coockies";
import { getInitialCurrency } from "../utils/getInitialCurrency";

interface ICurrencyStore {
  currency: TCurrencyCode;
  setCurrency: (value: TCurrencyCode) => void;
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
    }),
    {
      name: "useCurrencyStore",
    }
  )
);
