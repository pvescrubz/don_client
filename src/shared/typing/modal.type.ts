export const MODAL = {
  P_AUTH: "auth",
  P_PRICE_GUARANTEE: "priceGuarantee",
  P_COUPON: "coupon",
  P_EMAIL_OR_TRADEURL: "emailOrTradeUrl",
  B_SUBSCR: "subscr",
  B_BONUS: "bonus",
} as const;

export type TModalId = (typeof MODAL)[keyof typeof MODAL];

export interface IModalBase {
  id: TModalId;
}

export type IModal<T = Record<string, unknown>> = IModalBase & T;
