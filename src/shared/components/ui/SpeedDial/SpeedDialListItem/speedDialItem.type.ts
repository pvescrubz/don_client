import { ReactNode } from "react";


export type TSpeedDialItem = {
  href: string;
  icon: ReactNode;
  tooltip: string;
  type?:
    | "telegram"
    | "whatsapp"
    | "tel"
    | "vk"
    | "dzen"
    | "yandex-reviews"
    | "presentation"
    | "privacy-policy"
    | "rbc";
};
