"use client";

import { ReactNode } from "react";
import { IconInfo } from "../ui/svg/IconInfo";
import { IconLogin } from "../ui/svg/IconLogin";
import { IconMail } from "../ui/svg/IconMail";
import { IconMoney } from "../ui/svg/IconMoney";
import { IconPromo } from "../ui/svg/IconPromo";

export const AVAILABLE_FIELDS = {
  EMAIL: "email",
  AMOUNT: "amount",
  CURRENCY: "currency",
  LOGIN: "login",
  PROMO: "promo",
  REGION: "region",
  LINK: "link",
} as const;

export type TFieldKeys =
  (typeof AVAILABLE_FIELDS)[keyof typeof AVAILABLE_FIELDS];

export interface IPostInput {
  name: TFieldKeys;
  type: "text" | "hidden";
  required?: string;
  label: boolean;
  placeholder: string;
  defaultValue?: string;
  patternRegExp?: RegExp;
  patternMessage?: string;
  blockLettersEntry?: boolean;
  iconLeft?: ReactNode;
  iconRigth?: ReactNode;
}

export const POST_INPUTS: Record<TFieldKeys, IPostInput> = {
  [AVAILABLE_FIELDS.LOGIN]: {
    iconLeft: <IconLogin />,
    iconRigth: <IconInfo />,
    name: AVAILABLE_FIELDS.LOGIN,
    type: "text",
    label: true,
    placeholder: "Укажите свой логин",
    required: "Необходимо указать логин",
    patternRegExp: /^[a-zA-Z0-9_]{3,}$/,
    patternMessage: "Некорректная сумма",
  },
  [AVAILABLE_FIELDS.PROMO]: {
    iconLeft: <IconPromo />,
    name: AVAILABLE_FIELDS.PROMO,
    type: "text",
    label: true,
    placeholder: "Укажите промокод",
    patternRegExp: /a^/,
    patternMessage:
      "Проомакод должен содержать только буквы и быть не менее 3 символов",
  },
  [AVAILABLE_FIELDS.REGION]: {
    name: AVAILABLE_FIELDS.REGION,
    type: "text",
    label: true,
    placeholder: "Выберите регион",
  },
  [AVAILABLE_FIELDS.LINK]: {
    name: AVAILABLE_FIELDS.LINK,
    type: "text",
    label: true,
    placeholder: "Введите ссылку на скин",
    required: "Укажите ссылку на товар",
    patternRegExp:
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/i,
    patternMessage: "Некорректный email",
  },
  [AVAILABLE_FIELDS.EMAIL]: {
    iconLeft: <IconMail />,
    name: AVAILABLE_FIELDS.EMAIL,
    type: "text",
    label: true,
    placeholder: "Введите ваш email",
    required: 'Поле "Email" не может быть пустым',
    patternRegExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    patternMessage: "Некорректный email",
  },
  [AVAILABLE_FIELDS.AMOUNT]: {
    iconLeft: <IconMoney />,
    name: AVAILABLE_FIELDS.AMOUNT,
    type: "text",
    label: true,
    placeholder: "200",
    required: "Введите сумму пополнения",
    blockLettersEntry: true,
    patternRegExp: /^\d+$/,
    patternMessage: "Введите сумму",
  },
  [AVAILABLE_FIELDS.CURRENCY]: {
    name: AVAILABLE_FIELDS.CURRENCY,
    type: "hidden",
    label: false,
    placeholder: "",
    required: "Выберите валюту",
  },
};
