import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "./user.type";

type TUserStore = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

export const useUserStore = create<TUserStore>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user: IUser | null) => set({ user }),
    }),

    {
      name: "useUserStore",
    }
  )
);
