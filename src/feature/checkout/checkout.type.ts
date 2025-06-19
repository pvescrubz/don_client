import { TCurrencyCode } from "@/shared/typing/currency.type";
import { TOperation, TPaymentMethod } from "../orders/orders.type";

export interface ICheckoutRes {
  success: boolean;
  payment_url: string;
}
export interface ICheckoutData {
  paymentMethod: TPaymentMethod;
  operation: TOperation;
  amount?: string;
  email?: string;
  currency?: TCurrencyCode;
}
