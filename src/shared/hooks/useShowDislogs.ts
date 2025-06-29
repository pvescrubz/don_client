import { useCallback, useEffect, useState } from "react";
import { useModalStore } from "../stores/modal.store";
import { MODAL } from "../typing/modal.type";

export const useShowDislogs = () => {
  const { modals, openModal } = useModalStore();

  const referal = modals[MODAL.P_REFERAL];

  const [state, setState] = useState({
    referalWasOpen: false,
    referalShown: false,
    priceGuaranteeShown: false,
  });

  const updateState = useCallback((partialState: Partial<typeof state>) => {
    setState((prev) => ({ ...prev, ...partialState }));
  }, []);

  useEffect(() => {
    if (!referal) return;

    if (referal.open) {
      updateState({ referalWasOpen: true });
    }

    if (!referal.open && state.referalWasOpen) {
      updateState({ referalShown: true });
    }
  }, [referal?.open, referal, state.referalWasOpen, updateState]);

  useEffect(() => {
    let referalTimer: ReturnType<typeof setTimeout>;
    let priceGuarantee: ReturnType<typeof setTimeout>;

    if (!state.referalShown) {
      referalTimer = setTimeout(() => {
        openModal(MODAL.P_REFERAL);
      }, 1000 * 60);
    }

    if (state.referalShown && !state.priceGuaranteeShown) {
      priceGuarantee = setTimeout(() => {
        updateState({ priceGuaranteeShown: true });
        openModal(MODAL.P_PRICE_GUARANTEE);
      }, 1000 * 60 * 2);
    }

    return () => {
      clearTimeout(referalTimer);
      clearTimeout(priceGuarantee);
    };
  }, [openModal, state.priceGuaranteeShown, state.referalShown, updateState]);
};
