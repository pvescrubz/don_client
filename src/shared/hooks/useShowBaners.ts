import { useAuthStore } from "@/feature/auth/auth.store";
import { useEffect, useState } from "react";
import { useModalStore } from "../stores/modal.store";
import { MODAL } from "../typing/modal.type";

export const useShowBaners = () => {
  const { modals, openModal } = useModalStore();

  const bonus = modals[MODAL.B_BONUS];

  const { isAuth } = useAuthStore();

  const [bonusWasOpen, setBonusWasOpen] = useState(false);
  const [bonusShown, setBonusShown] = useState(false);

  useEffect(() => {
    if (!bonus) return;
    if (bonus.open) {
      setBonusWasOpen(true);
    }
    if (!bonus.open && bonusWasOpen) {
      setBonusShown(true);
    }
  }, [bonus?.open, bonus, bonusWasOpen, bonusShown]);

  useEffect(() => {
    if (isAuth) {
      if (!bonusShown) {
        setTimeout(() => {
          openModal(MODAL.B_BONUS);
        }, 1000 * 30);
      }

      if (bonusShown) {
        setTimeout(() => {
          openModal(MODAL.B_SUBSCR);
        }, 1000 * 30);
      }
    }
  }, [bonusShown, isAuth, openModal]);
};
