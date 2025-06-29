import { useAuthStore } from "@/feature/auth/auth.store";
import { useUserStore } from "@/feature/user/user.store";
import { useCallback, useEffect, useState } from "react";
import { useModalStore } from "../stores/modal.store";
import { MODAL } from "../typing/modal.type";

export const useShowBaners = () => {
  const { modals, openModal } = useModalStore();
  const { user } = useUserStore();
  const { isAuth } = useAuthStore();

  const subscr = modals[MODAL.P_REFERAL];

  const [state, setState] = useState({
    subscrWasOpen: false,
    subscrShown: false,
    bonusShown: false,
  });

  const updateState = useCallback((partialState: Partial<typeof state>) => {
    setState((prev) => ({ ...prev, ...partialState }));
  }, []);

  useEffect(() => {
    if (user?.isSubscribedToNews) updateState({ subscrShown: true });
  }, [user?.isSubscribedToNews, updateState]);

  useEffect(() => {
    if (!subscr) return;

    if (subscr.open) {
      updateState({ subscrWasOpen: true });
    }

    if (!subscr.open && state.subscrWasOpen) {
      updateState({ subscrShown: true });
    }
  }, [subscr?.open, subscr, state.subscrWasOpen, updateState]);

  useEffect(() => {
    let subscrTimer: ReturnType<typeof setTimeout>;
    let bonusTimer: ReturnType<typeof setTimeout>;

    if (isAuth) {

      if (!state.subscrShown && !user?.isSubscribedToNews) {
        subscrTimer = setTimeout(() => {
          openModal(MODAL.B_SUBSCR);
        }, 1000 * 30);
      }

      if (state.subscrShown && !state.bonusShown) {
        bonusTimer = setTimeout(() => {
          updateState({ bonusShown: true });
          openModal(MODAL.B_BONUS);
        }, 1000 * 90);
      }
    }

    return () => {
      clearTimeout(subscrTimer);
      clearTimeout(bonusTimer);
    };
  }, [
    state.subscrShown,
    state.bonusShown,
    isAuth,
    user,
    openModal,
    updateState,
  ]);
};
