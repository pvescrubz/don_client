import { CONTACTS_PUBLIC } from "@/shared/content/contacts.data";
import { IconTelegram } from "../svg/IconTelegram";
import { IconWhatsApp } from "../svg/IconWhatsApp";
import { TSpeedDialItem } from "./SpeedDialListItem/speedDialItem.type";

class SpeedDeal {
  WHATSAPP = {
    href: CONTACTS_PUBLIC.WHATSAPP,
    tooltip: "Написать в WhatsApp",
    icon: <IconWhatsApp />,
  } satisfies TSpeedDialItem;

  TELEGRAM = {
    href: CONTACTS_PUBLIC.TELEGRAM,
    tooltip: "Написать в Telegram",
    icon: <IconTelegram />,
  } satisfies TSpeedDialItem;

  toArray(): TSpeedDialItem[] {
    return Object.values(this);
  }
}

export const SPEED_DEAL = new SpeedDeal().toArray();
