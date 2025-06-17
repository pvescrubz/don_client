import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "./user.type";

type TUserStore = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isActivated: () => boolean;
};

export const useUserStore = create<TUserStore>()(
  devtools(
    (set, get) => ({
      user: null,
      setUser: (user: IUser | null) => set({ user }),
      isActivated: () => {
        const user = get().user;
        if (!user) return false;
        if (!user.email || !user.activatedEmail) return false;
        return user.email === user.activatedEmail;
      },
    }),

    {
      name: "useUserStore",
    }
  )
);
