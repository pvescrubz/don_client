import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUsePriceRangeClear {
  needClear: boolean;
  toggleNeedClear: (value: boolean) => void;
}

export const useFiltersClear = create<IUsePriceRangeClear>()(
  devtools(
    (set) => ({
      needClear: false,
      toggleNeedClear: (value) => set({ needClear: value }),
    }),
    {
      name: "PriceRangeStore",
    }
  )
);
