import { ISkinBase } from "../skins/skins.type";

export const PAYMENT_STATUS = {
  PENDING: "PENDING", // Ожидает оплаты
  PAID: "PAID", // Оплачено точно в сумму заявки
  PARTIALLY_PAID: "PARTIALLY_PAID", // Оплачено меньше указанной суммы
  OVERPAID: "OVERPAID", // Оплачено больше указанной суммы
  EXPIRED: "EXPIRED", // Просрочена, но может быть оплачена позднее
  CANCELED: "CANCELED", // Отменена (вами или оператором)
  ERROR: "ERROR", // Ошибка при создании заявки или процессе оплаты
};

export type TPaymentStatus =
  (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS];

export const OPERATION = {
  RECHARGE_ACCUNT_BALANCE: "RECHARGE_ACCUNT_BALANCE",
  RECHARGE_STEAM_BALANCE: "RECHARGE_STEAM_BALANCE",
  RECHARGE_PS_BALANCE: "RECHARGE_PS_BALANCE",
  RECHARGE_BLIZZARD_BALANCE: "RECHARGE_BLIZZARD_BALANCE",
  RECHARGE_EPIC_BALANCE: "RECHARGE_EPIC_BALANCE",
  RECHARGE_XBOX_BALANCE: "RECHARGE_XBOX_BALANCE",
  BUY_SKINS: "BUY_SKINS",
};

export type TOperation = (typeof OPERATION)[keyof typeof OPERATION];

export const PAYMENT_METHOD = {
  ACCUNT_BALANCE: "ACCUNT_BALANCE",
  SBP: "SBP",
};

export type TPaymentMethod =
  (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];

export interface IOrder {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactionId: string;
  status: TPaymentStatus;
  operation: TOperation;
  amount: string;
  paymentMethod: TPaymentMethod;
  login?: string;
  region?: string;
  notificationEmail: string;
  userId: string;
  skins?: ISkinBase[];
}
