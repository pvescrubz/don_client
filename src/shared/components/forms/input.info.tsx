"use client";

import { ReactNode } from "react";
import { IconInfo } from "../ui/svg/IconInfo";
import { IconLogin } from "../ui/svg/IconLogin";
import { IconMail } from "../ui/svg/IconMail";
import { IconPromo } from "../ui/svg/IconPromo";
import { IconRubl } from "../ui/svg/IconRubl";

export const AVAILABLE_FIELDS = {
  EMAIL: "email",
  ONLY_NUMBERS: "onlyNumbers",
  ADD_LOGIN: 'addLogin',
  ADD_PROMO: 'addPromo',
    THEMES: "themes",
  LINK:'link'
} as const;

export type TFieldKeys =
  (typeof AVAILABLE_FIELDS)[keyof typeof AVAILABLE_FIELDS];

export interface IPostInput {
  name: TFieldKeys;
  type: "text";
  required?: string;
  label: boolean;
  placeholder: string;
  defaultValue?: string;
  patternRegExp?: RegExp;
  patternMessage?: string;
  iconLeft?: ReactNode;
  iconRigth?: ReactNode;
}

export const POST_INPUTS: Record<TFieldKeys, IPostInput> = {
  [AVAILABLE_FIELDS.ADD_LOGIN]: {
    iconLeft: <IconLogin />,
    iconRigth: <IconInfo />,
    name: AVAILABLE_FIELDS.ADD_LOGIN,
    type: "text",
    label: true,
    placeholder: "Укажите свой логин",
    required: 'Необходимо указать логин',
    patternRegExp: /^[a-zA-Z]{3,}$/,
    patternMessage: 'Некорректная сумма',
  },
  [AVAILABLE_FIELDS.ADD_PROMO]: {
    iconLeft: <IconPromo />,
    name: AVAILABLE_FIELDS.ADD_PROMO,
    type: "text",
    label: true,
    placeholder: "Укажите промокод",
    patternRegExp: /^[a-zA-Z]{3,}$/,
    patternMessage: 'Проомакод должен содержать только буквы и быть не менее 3 символов',
  },
    [AVAILABLE_FIELDS.THEMES]: {
    name: AVAILABLE_FIELDS.THEMES,
    type: "text",
    label: true,
    placeholder: "Выберите регион",
  },
  [AVAILABLE_FIELDS.LINK]: {
    name: AVAILABLE_FIELDS.LINK,
    type: "text",
    label: true,
    placeholder: "Введите ссылку на скин",
    required: 'Укажите ссылку на товар',
    patternRegExp: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/i,
    patternMessage: 'Некорректный email',
  },
    [AVAILABLE_FIELDS.EMAIL]: {
      iconLeft: <IconMail  />,
    name: AVAILABLE_FIELDS.EMAIL,
    type: "text",
    label: true,
    placeholder: "Введите ваш email",
    required: 'Поле "Email" не может быть пустым',
    patternRegExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    patternMessage: 'Некорректный email',
  },
  [AVAILABLE_FIELDS.ONLY_NUMBERS]: {
    iconLeft: <IconRubl />,
    name: AVAILABLE_FIELDS.ONLY_NUMBERS,
    type: "text",
    label: true,
    placeholder: "200 ₽",
    required: 'Поле не может быть пустым',
    patternRegExp: /^\d+$/,
    patternMessage: 'Введите сумму',
  },

};