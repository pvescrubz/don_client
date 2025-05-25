export const gameConfigs = {
  steam: {
    name: "Steam",
    navimage:"/images/steambg.png",
    navicon:"/images/steamicon.png",
    title: "Пополнение баланса Steam",
    formimage: "/images/steambgform.webp",
    image2: "/images/steam2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  "epic-games" : {
    navimage:"/images/epicbg.png",
    name: "Epic Games",
    navicon:"/images/epicgamesicon.png",
    title: "Пополнение баланса Epic Games",
    formimage: "/images/epicgamesbgform.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  "play-station": {
    name: "Play Station",
    navimage:"/images/playstationbg.png",
     navicon:"/images/playstationicon.png",
    title: "Пополнение баланса Play Station",
    formimage: "/images/playstationbgform.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
  "xbox": {
    name: "Xbox",
     navicon:"/images/xboxicon.png",
     navimage:"/images/xboxbg.png",
    title: "Пополнение баланса Xbox",
    formimage: "/images/xboxbgform.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },
    "blizzard": {
      name: "Blizzard",
      navimage:"/images/blizzardbg.png",
      navicon:"/images/blizzardicon.png",
    title: "Пополнение баланса Blizzard",
    formimage: "/images/blizzardbgform.webp",
    image2: "/images/origin2icon.png",
    description: "Заполните форму для пополнения баланса",
  },

} as const;

export type GamePlatform = keyof typeof gameConfigs;
export type GameConfig = typeof gameConfigs[GamePlatform];