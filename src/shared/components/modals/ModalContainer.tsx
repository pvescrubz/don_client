"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { IModal, MODAL, TModalId } from "@/shared/typing/modal.type";
import { FC, useEffect } from "react";
import { BonusBaner, SubscriptionBaner } from "./baners";
import { AuthPopup, CouponPopup, PriceGuaranteePopup } from "./popups";

const MODALS_ENTRIES: [TModalId, FC<IModal>][] = [
  [MODAL.P_AUTH, AuthPopup],
  [MODAL.P_COUPON, CouponPopup],
  [MODAL.P_PRICE_GUARANTEE, PriceGuaranteePopup],
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
