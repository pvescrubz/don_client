// src/shared/stores/popup.store.ts
import { createWithEqualityFn } from "zustand/traditional";

type ModalState = {
  open: boolean;
  resolve?: (value?: unknown) => void;
  reject?: (reason?: unknown) => void;
  [key: string]: unknown;
};

type Modals = {
  [modalName: string]: ModalState;
};

type ModalStore = {
  modals: Modals;
  setModals: (modals: Modals) => void;
  setOpenModal: (
    modalName: string,
    open: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Record<string, any>
  ) => Promise<unknown>;
  setResetModal: (modalName: string) => void;
};

export const useModalStore = createWithEqualityFn<ModalStore>(
  (set) => ({
    modals: {},
    setModals: (modals) => set({ modals }),

    setOpenModal: (modalName, open, props = {}) =>
      new Promise((resolve, reject) => {
        set((state) => {
          const currentModals = { ...state.modals };
          if (open) {
            currentModals[modalName] = {
              ...(currentModals[modalName] || {}),
              open: true,
              ...props,
              resolve,
              reject,
            };
          } else {
            currentModals[modalName] = {
              ...(currentModals[modalName] || {}),
              open: false,
            };
          }

          return { modals: currentModals };
        });
      }),

    setResetModal: (modalName) =>
      set((state) => {
        const currentModals = { ...state.modals };
        currentModals[modalName] = {
          ...currentModals[modalName],
          open: false,
          resolve: undefined,
          reject: undefined,
        };
        return { modals: currentModals };
      }),
  }),
  Object.is 
);