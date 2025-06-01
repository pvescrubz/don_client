import { APP_PAGES } from "../dashboard/app.dashboard";
import { getLastSlugPart } from "../lib/getLastSlugPart";

export const PLATFORM_CONFIG = {
  [getLastSlugPart(APP_PAGES.BALANCE_STEAM.slug)]: {
    name: "Steam",
    slug: APP_PAGES.BALANCE_STEAM.slug,
    navimage: "/images/steambg.png",
    navicon: "/images/steamicon.png",
    title: "Пополнение баланса Steam",
    formimage: "/images/steambgform.webp",
    sectionbgimage: "/images/steambgimage.webp",
    image2: "/images/steam2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_EPIC.slug)]: {
    slug: APP_PAGES.BALANCE_EPIC.slug,
    name: "Epic Games",
    navimage: "/images/epicbg.png",
    navicon: "/images/epicgamesicon.png",
    title: "Пополнение баланса Epic Games",
    formimage: "/images/epicgamesbgform.webp",
    sectionbgimage: "/images/epicbgimage.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_PS.slug)]: {
    name: "Play Station",
    slug: APP_PAGES.BALANCE_PS.slug,
    navimage: "/images/playstationbg.png",
    navicon: "/images/playstationicon.png",
    title: "Пополнение баланса Play Station",
    formimage: "/images/playstationbgform.webp",
    sectionbgimage: "/images/playstationbgimage.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_XBOX.slug)]: {
    name: "Xbox",
    slug: APP_PAGES.BALANCE_XBOX.slug,
    navicon: "/images/xboxicon.png",
    navimage: "/images/xboxbg.png",
    title: "Пополнение баланса Xbox",
    formimage: "/images/xboxbgform.webp",
    sectionbgimage: "/images/xboxbgimage.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  [getLastSlugPart(APP_PAGES.BALANCE_BLIZZARD.slug)]: {
    name: "Blizzard",
    slug: APP_PAGES.BALANCE_BLIZZARD.slug,
    navimage: "/images/blizzardbg.png",
    navicon: "/images/blizzardicon.png",
    title: "Пополнение баланса Blizzard",
    formimage: "/images/blizzardbgform.webp",
    sectionbgimage: "/images/blizzardbgimage.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
} as const;

export type TGamePlatform =
  (typeof PLATFORM_CONFIG)[keyof typeof PLATFORM_CONFIG];
