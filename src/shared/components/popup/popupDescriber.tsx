/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/modals/modalsDescriber.ts


import { AuthPopup } from "./authPopup/AuthPopup";
import { AuthPopupDescription } from "./authPopup/AuthPopup.description";
import { BonusPopupDescription } from "./bonusPopup/BonsPopup.description";
import { BonusPopup } from "./bonusPopup/BonusPopup";
import { CouponPopupDescription } from "./couponPopup/CouponPopup.description";
import { CouponPopup } from "./couponPopup/СouponPopup";
import { PriceCheckPopup } from "./priceCheckPopup/PriceCheckPopup";
import { PriceCheckPopupDescription } from "./priceCheckPopup/PriceCheckPopup.description";
import { SubscriptionPopup } from "./subscriptionPopup/SubscriptionPopup";
import { SubscriptionPopupDescription } from "./subscriptionPopup/SubscriptionPopup.description";


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

