"use client";

import { useModalStore } from "@/shared/stores/popup.store";
import { modals as modalsDescriber } from "./popupDescriber";

export const ModalsContainer = () => {
  const [modals] = useModalStore((state) => [state.modals]);

  return (
    <>
      {Object.entries(modals).map(([name, modal]) => {
        if (!modal.open) return null;
        const ModalComponent = modalsDescriber[name]?.component;
        return ModalComponent ? <ModalComponent key={name} {...modal} /> : null;
      })}
    </>
  );
};
