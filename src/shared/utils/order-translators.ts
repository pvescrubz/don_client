import {
  OPERATION,
  PAYMENT_METHOD,
  PAYMENT_STATUS,
} from "@/feature/orders/orders.type";

export const translateStatus = (status: string): string => {
  switch (status) {
    case PAYMENT_STATUS.PENDING:
      return "Ожидает оплаты";
    case PAYMENT_STATUS.PAID:
      return "Оплачено";
    case PAYMENT_STATUS.PARTIALLY_PAID:
      return "Частично оплачено";
    case PAYMENT_STATUS.OVERPAID:
      return "Переплата";
    case PAYMENT_STATUS.EXPIRED:
      return "Просрочено";
    case PAYMENT_STATUS.CANCELED:
      return "Отменено";
    case PAYMENT_STATUS.ERROR:
      return "Ошибка оплаты";
    default:
      return "Неизвестный статус";
  }
};

export const translateOperation = (operation: string): string => {
  switch (operation) {
    case OPERATION.RECHARGE_ACCUNT_BALANCE:
      return "Пополнение баланса";
    case OPERATION.RECHARGE_STEAM_BALANCE:
      return "Пополнение Steam";
    case OPERATION.RECHARGE_PS_BALANCE:
      return "Пополнение PS";
    case OPERATION.RECHARGE_BLIZZARD_BALANCE:
      return "Пополнение Blizzard";
    case OPERATION.RECHARGE_EPIC_BALANCE:
      return "Пополнение Epic Games";
    case OPERATION.RECHARGE_XBOX_BALANCE:
      return "Пополнение XBox";
    case OPERATION.BUY_SKINS:
      return "Покупка скинов";
    default:
      return "Неизвестная операция";
  }
};

export const translatePaymentMethod = (method: string): string => {
  switch (method) {
    case PAYMENT_METHOD.ACCUNT_BALANCE:
      return "С баланса аккаунта";
    case PAYMENT_METHOD.SBP:
      return "СБП";
    default:
      return "Неизвестный метод";
  }
};
