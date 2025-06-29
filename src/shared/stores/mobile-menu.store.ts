import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IMobileMenuState {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useMobileMenu = create<IMobileMenuState>()(
  devtools(
    (set) => ({
      menuOpen: false,
      toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
      closeMenu: () => set(() => ({ menuOpen: false })),
    }),
    {
      name: "mobileMenuStore",
    }
  )
);
