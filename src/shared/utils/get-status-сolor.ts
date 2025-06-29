import { PAYMENT_STATUS } from "@/feature/orders/orders.type";

export const getStatusColor = (status: string): string => {
  switch (status) {
    case PAYMENT_STATUS.PAID:
      return "#10b981";
    case PAYMENT_STATUS.PENDING:
      return "#facc15";
    case PAYMENT_STATUS.PARTIALLY_PAID:
      return "#3b82f6";
    case PAYMENT_STATUS.OVERPAID:
      return "#8b5cf6";
    case PAYMENT_STATUS.CANCELED:
      return "#ef4444";
    case PAYMENT_STATUS.ERROR:
      return "#dc2626";
    case PAYMENT_STATUS.EXPIRED:
      return "#9ca3af";
    default:
      return "#6b7280";
  }
};
