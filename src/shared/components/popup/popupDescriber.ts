/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/modals/modalsDescriber.ts

import { AuthPopup } from "./AuthPopup/AuthPopup";
import { AuthPopupDescription } from "./AuthPopup/AuthPopup.description";
import { BonusPopupDescription } from "./BonusPopup/BonsPopup.description";
import { BonusPopup } from "./BonusPopup/BonusPopup";
import { CouponPopupDescription } from "./CouponPopup/CouponPopup.description";
import { CouponPopup } from "./CouponPopup/СouponPopup";
import { PriceCheckPopup } from "./PriceCheckPopup/PriceCheckPopup";
import { PriceCheckPopupDescription } from "./PriceCheckPopup/PriceCheckPopup.description";
import { SubscriptionPopup } from "./SubscriptionPopup/SubscriptionPopup";
import SubscriptionPopupDescription from "./SubscriptionPopup/SubscriptionPopup.description";



export interface ModalDescription {
  name: string;
  promiseBased: boolean;
  component: React.FC<any>;
  defaultProps: Record<string, any>;
}

const modals: Record<string, ModalDescription> = {};

const registerModal = (component: React.FC<any>, description: any) => {
  modals[description.name] = {
    name: description.name,
    promiseBased: description.promiseBased,
    component,
    defaultProps: description.defaultProps || {},
  };
};

registerModal(BonusPopup, BonusPopupDescription);
registerModal(AuthPopup, AuthPopupDescription);
registerModal(CouponPopup, CouponPopupDescription);
registerModal(SubscriptionPopup, SubscriptionPopupDescription);
registerModal(PriceCheckPopup, PriceCheckPopupDescription);

export { modals };

