import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IScrollElementStore {
  elementRef: React.RefObject<HTMLDivElement | null>;
  setElementRef: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

export const useScrollElementStore = create<IScrollElementStore>()(
  devtools(
    (set) => ({
      elementRef: { current: null },
      setElementRef: (ref) => set({ elementRef: ref }),
    }),
    {
      name: "scrollElementStore",
    }
  )
);
