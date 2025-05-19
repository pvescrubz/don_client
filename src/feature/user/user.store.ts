import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TUser } from "./user.type";

type TUserStore = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

export const useUserStore = create<TUserStore>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user: TUser | null) => set({ user }),
    }),

    {
      name: "userStore",
    }
  )
);
