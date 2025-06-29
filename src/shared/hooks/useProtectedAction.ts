"use client";
import { useAuthStore } from "@/feature/auth/auth.store";
import { useUserStore } from "@/feature/user/user.store";
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


  const { user, isActivated } = useUserStore();
  const withTradeUrlAndEmailCheck = (action: () => void) => {
    if (!isActivated() || !user?.steamTradeUrl) {
      openModal(MODAL.P_EMAIL_OR_TRADEURL);
      return;
    }
    action();
  };

  return { withAuthCheck, withTradeUrlAndEmailCheck };
};
