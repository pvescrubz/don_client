import { KeyboardEvent } from "react";

export const blockAllText = (event: KeyboardEvent<HTMLInputElement>): void => {
  const isAllowedKey = [
    "Tab",
    "ArrowUp",
    "ArrowDown",
    "Enter",
    "Backspace",
    "Delete",
  ].includes(event.key);

  if (!isAllowedKey) {
    event.preventDefault();
  }
};
