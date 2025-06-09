import { ReactNode } from "react";
import { ISelectItem } from "../components/forms/ui/Select/Select";
import { IconDollar } from "../components/ui/svg/IconDollar";
import { IconEuro } from "../components/ui/svg/IconEuro";
import { IconRuble } from "../components/ui/svg/IconRuble";
import { IconTenge } from "../components/ui/svg/IconTenge";

export type TCurrencyCode = "RUB" | "USD" | "KZT" | "EUR";

export interface ICurrency extends ISelectItem {
  value: TCurrencyCode ;

}

export const CURRENCY: ICurrency[] = [
  { value: "RUB", name: "Рубль", image: "/images/flag-ru.png" },
  { value: "KZT", name: "Тенге", image: "/images/flag-kz.png" },
  { value: "USD", name: "Доллар", image: "/images/flag-usa.png" },
  { value: "EUR", name: "Евро", image: "/images/flag-euro.png" },
] as const;

export const CURRENCY_ICON: Record<TCurrencyCode, ReactNode> = {
  RUB: <IconRuble />,
  KZT: <IconTenge />,
  USD: <IconDollar />,
  EUR: <IconEuro />,
};

export const CURRENCY_SYMBOL: Record<TCurrencyCode, string> = {
  RUB: "₽",
  USD: "$",
  KZT: "₸",
  EUR: "€",
};
