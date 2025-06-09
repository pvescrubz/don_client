'use client'
import { useAuthStore } from "@/feature/auth/auth.store";
import { useModalStore } from "../stores/modal.store";
import { MODAL } from "../typing/modal.type";

export const useProtectedAction = () => {
  const { isAuth } = useAuthStore();
  const { openModal } = useModalStore();

  const withAuthCheck = (action: () => void) => {
    if (!isAuth) {
      openModal(MODAL.P_AUTH);
      return;
    }
    action();
  };

  return { withAuthCheck };
};