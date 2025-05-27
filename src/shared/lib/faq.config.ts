

import { APP_PAGES } from "../dashboard/app.dashboard";

const getName = (slug: string) => {
  const arr = slug.split("/");
  return arr[arr.length - 1];
};

export const FAQ_CONFIG = {
  [getName(APP_PAGES.BALANCE_STEAM.slug)]: [
    { title: "Как купить баланс Steam?", descr: "steam" },
   
  ],
   [APP_PAGES.HOME.slug]: [
    { title: "HOME HOME", descr: "steam" },
   
  ],
     [APP_PAGES.FAQ.slug]: [
    { title: "FAQ", descr: "steam" },
   
  ],
   [getName(APP_PAGES.BALANCE_BLIZZARD.slug)]: [
    { title: "BLIZARD?", descr: "home" },
   
  ],
     [getName(APP_PAGES.BALANCE_PS.slug)]: [
    { title: "SONY?", descr: "home" },
   
  ],
       [getName(APP_PAGES.BALANCE_XBOX.slug)]: [
    { title: "xbox?", descr: "home" },
   
  ],
   [getName(APP_PAGES.BALANCE_XBOX.slug)]: [
    { title: "xbox?", descr: "home" },
   
  ],
  [getName(APP_PAGES.BALANCE_EPIC.slug)]: [
    { title: "EPIC GAMES", descr: "home" },
   
  ]
} as const;

export type TFaq = (typeof FAQ_CONFIG)[keyof typeof FAQ_CONFIG];
