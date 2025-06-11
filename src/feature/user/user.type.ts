import { TCurrencyCode } from "@/shared/typing/currency.type";
export interface IUser {
  id: string;
  email: string;
  name: string;
  isActivated: boolean;
  selectedCurrency: TCurrencyCode;
}
