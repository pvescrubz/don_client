import { TCurrencyCode } from "@/shared/typing/currency.type";
export interface IUser {
  id: string;
  email: string;
  steamId: string;
  name: string;
  activatedEmail: string;
  selectedCurrency: TCurrencyCode;
  steamTradeUrl?: string;
  steamAvatar?: string;
  isSubscribedToNews: boolean;
  balance: string;
  ref: string;
  _count: {
    referrals: string;
  };
}

export interface IUpdateData {
  steamTradeUrl?: string;
  email?: string;
  isSubscribedToNews?: boolean;
}
