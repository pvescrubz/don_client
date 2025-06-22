"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { IModal, MODAL, TModalId } from "@/shared/typing/modal.type";
import { FC, useEffect } from "react";
import { BonusBaner, SubscriptionBaner } from "./baners";
import { AuthPopup, PriceGuaranteePopup, ReferalPopup } from "./popups";
import { EmailOrTradeUrlPopup } from "./popups/EmailOrTradeUrlPopup/EmailOrTradeUrlPopup";

const MODALS_ENTRIES: [TModalId, FC<IModal>][] = [
  [MODAL.P_AUTH, AuthPopup],
  [MODAL.P_EMAIL_OR_TRADEURL, EmailOrTradeUrlPopup],

  [MODAL.P_PRICE_GUARANTEE, PriceGuaranteePopup],
  [MODAL.P_REFERAL, ReferalPopup],

  [MODAL.B_SUBSCR, SubscriptionBaner],
  [MODAL.B_BONUS, BonusBaner],
];

export const ModalContainer = () => {
  const { registerModal, modals } = useModalStore();

  useEffect(() => {
    MODALS_ENTRIES.map(([id, component]) => {
      registerModal(id, component);
    });
  }, [registerModal]);

  // useShowBaners();
  // useShowDislogs();

  return (
    <>
      {Object.entries(modals).map(([id, modal]) => {
        if (!modal.open) return null;
        const ModalComponent = modal.component;
        return <ModalComponent key={id} {...modal.props} id={id as TModalId} />;
      })}
    </>
  );
};
