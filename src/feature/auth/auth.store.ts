import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TAuthStore = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  loading: boolean | null;
  setLoading: (value: boolean) => void;
};

export const useAuthStore = create<TAuthStore>()(
  devtools(
    (set) => ({
      isAuth: false,
      setIsAuth: (value: boolean) => set({ isAuth: value }),
      loading: null,
      setLoading: (value: boolean) => set({ loading: value }),
    }),
    {
      name: "authStore",
    }
  )
);
