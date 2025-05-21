// src/lib/modal/showModal.ts

import { useModalStore } from "../stores/popup.store";


export const showModal = (
  modalName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any> = {}
): Promise<unknown> => {
  const store = useModalStore.getState();

  return new Promise((resolve, reject) => {
    store.setOpenModal(modalName, true, {
      ...props,
      resolve,
      reject,
    });
  });
};