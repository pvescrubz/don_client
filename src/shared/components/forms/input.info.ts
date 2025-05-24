"use client";
export const AVAILABLE_FIELDS = {
  EMAIL: "email",
  ONLY_NUMBERS: "onlyNumbers",
  ADD_MONEY: 'addMoney',
  LINK:'link'
} as const;

export type TFieldKeys =
  (typeof AVAILABLE_FIELDS)[keyof typeof AVAILABLE_FIELDS];

export interface IPostInput {
  name: TFieldKeys;
  type: "text";
  required: string;
  label: boolean;
  placeholder: string;
  defaultValue?: string;
  patternRegExp?: RegExp;
  patternMessage?: string;
}

export const POST_INPUTS: Record<TFieldKeys, IPostInput> = {
  [AVAILABLE_FIELDS.ADD_MONEY]: {
    name: AVAILABLE_FIELDS.ADD_MONEY,
    type: "text",
    label: true,
    placeholder: "Введите учетную запись",
    required: 'Поле "Email" не может быть пустым',
    patternRegExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    patternMessage: 'Некорректный email',
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
    name: AVAILABLE_FIELDS.EMAIL,
    type: "text",
    label: true,
    placeholder: "example@mail.com",
    required: 'Поле "Email" не может быть пустым',
    patternRegExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    patternMessage: 'Некорректный email',
  },
  [AVAILABLE_FIELDS.ONLY_NUMBERS]: {
    name: AVAILABLE_FIELDS.ONLY_NUMBERS,
    type: "text",
    label: true,
    placeholder: "1000",
    required: 'Поле не может быть пустым',
    patternRegExp: /^\d+$/,
    patternMessage: 'Введите сумму',
  },

};