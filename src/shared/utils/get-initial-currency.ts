import { CURRENCY } from "../typing/currency.type";
import { getCookie } from "./cookies";



export const getInitialCurrency = (): string => {
  const saved = getCookie("currency");

  if (saved && Object.values(CURRENCY).some((c) => c.value === saved)) {
    return saved;
  }

  return CURRENCY.RUB.value;
};
