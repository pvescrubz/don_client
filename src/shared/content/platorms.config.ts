import { APP_PAGES } from "../dashboard/app.dashboard";
import { getLastSlugPart } from "../lib/getLastSlugPart";

export interface IPlatformConfigItem {
  name: string;
  slug: string;
  navBg: string;
  logo: string;
  formTitle: string;
  formImage: string;
  fieldTitle: string;
}
export interface IPlatformConfig {
  [key: string]: IPlatformConfigItem;
}

export const PLATFORM_CONFIG = {
  [getLastSlugPart(APP_PAGES.BALANCE_STEAM.slug)]: {
    name: "Steam",
    slug: APP_PAGES.BALANCE_STEAM.slug,
    navBg: "/images/steambg.png",
    logo: "/images/logo-steam.png",
    formTitle: "Пополнение баланса Steam",
    formImage: "/images/steambgform.webp",
    fieldTitle: "Логин Steam",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_EPIC.slug)]: {
    slug: APP_PAGES.BALANCE_EPIC.slug,
    name: "Epic Games",
    navBg: "/images/epicbg.png",
    logo: "/images/logo-epic.png",
    formTitle: "Пополнение баланса Epic Games",
    formImage: "/images/epicgamesbgform.webp",
    fieldTitle: "Регион и логин Epic Games",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_PS.slug)]: {
    name: "Play Station",
    slug: APP_PAGES.BALANCE_PS.slug,
    navBg: "/images/playstationbg.png",
    logo: "/images/logo-ps.png",
    formTitle: "Пополнение баланса Play Station",
    formImage: "/images/playstationbgform.webp",
    fieldTitle: "Регион и логин PlayStation",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_XBOX.slug)]: {
    name: "Xbox",
    slug: APP_PAGES.BALANCE_XBOX.slug,
    logo: "/images/logo-xbox.png",
    navBg: "/images/xboxbg.png",
    formTitle: "Пополнение баланса Xbox",
    formImage: "/images/xboxbgform.webp",
    fieldTitle: "Регион и логин Xbox",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_BLIZZARD.slug)]: {
    name: "Blizzard",
    slug: APP_PAGES.BALANCE_BLIZZARD.slug,
    navBg: "/images/blizzardbg.png",
    logo: "/images/logo-blizzard.png",
    formTitle: "Пополнение баланса Blizzard",
    formImage: "/images/blizzardbgform.webp",
    fieldTitle: " Регион и логин Blizzard",
  },
} satisfies IPlatformConfig;
