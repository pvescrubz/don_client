/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/modals/modalsDescriber.ts

import { BonusPopupDescription } from "./bonusPopup/BonsPopup.description";
import { BonusPopup } from "./bonusPopup/BonusPopup";


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

export { modals };

