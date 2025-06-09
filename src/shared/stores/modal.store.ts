import { ComponentType } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IModal, TModalId } from "../typing/modal.type";

type ModalProps = IModal;
type ModalComponent = ComponentType<ModalProps>;

interface ModalInstance {
  id: string;
  component: ModalComponent;
  props?: ModalProps;
  open: boolean;
}

interface IModalStore {
  modals: Record<string, ModalInstance>;
  registerModal: (id: TModalId, component: ModalComponent) => void;
  openModal: (id: TModalId, props?: ModalProps) => void;
  closeModal: (id: TModalId) => void;
  closeAllModals: () => void;
}

export const useModalStore = create<IModalStore>()(
  devtools((set) => ({
    modals: {},
    registerModal: (id, component) =>
      set((state) => ({
        modals: {
          ...state.modals,
          [id]: { id, component, open: false },
        },
      })),
    openModal: (id, props) =>
      set((state) => {
        const modal = state.modals[id];
        if (!modal) return state;

        return {
          modals: {
            ...state.modals,
            [id]: {
              ...modal,
              open: true,
              props,
            },
          },
        };
      }),
    closeModal: (id) =>
      set((state) => {
        const modal = state.modals[id];
        if (!modal) return state;

        return {
          modals: {
            ...state.modals,
            [id]: {
              ...modal,
              open: false,
              props: undefined,
            },
          },
        };
      }),
    closeAllModals: () =>
      set((state) => {
        const closed = Object.fromEntries(
          Object.entries(state.modals).map(([id, modal]) => [
            id,
            { ...modal, open: false, props: undefined },
          ])
        );

        return { modals: closed };
      }),
  }))
);
