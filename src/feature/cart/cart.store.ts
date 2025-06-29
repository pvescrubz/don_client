import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUseCartStore {
  cartIds: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
  clearCart: () => void;
}

export const useCartStore = create<IUseCartStore>()(
  devtools(
    (set, get) => ({
      cartIds: [],

      addToCart: (id) =>
        set((state) => {
          if (state.cartIds.includes(id)) {
            return {};
          }
          return { cartIds: [...state.cartIds, id] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cartIds: state.cartIds.filter((cartId) => cartId !== id),
        })),
      isInCart: (id) => get().cartIds.includes(id),
      clearCart: () => set({ cartIds: [] }),
    }),

    {
      name: "useCartStore",
    }
  )
);
