export const gameConfigs = {
  steam: {
    name: "Steam",
    image:"/images/steambg.png",
     icon:"/images/steamicon.png",
    title: "Пополнение баланса Steam",
    image1: "/images/steam1icon.png",
    image2: "/images/steam2icon.png",
    description: "Введите свой Steam ID, чтобы пополнить баланс.",
  },
  epicgames: {
    image:"/images/epicbg.png",
    name: "Epic Games",
    icon:"/images/epicgamesicon.png",
    title: "Пополнение баланса Epic Games",
    image1: "/images/origin1icon.png",
    image2: "/images/origin2icon.png",
    description: "Введите логин от вашего Epic Games аккаунта.",
  },
  playstation: {
    name: "PlayStation",
    image:"/images/playstationbg.png",
     icon:"/images/playstationicon.png",
    title: "Пополнение баланса Play Station",
    image1: "/images/origin1icon.png",
    image2: "/images/origin2icon.png",
    description: "Введите логин от вашего Play Station аккаунта.",
  },
  xbox: {
    name: "Xbox",
     icon:"/images/xboxicon.png",
     image:"/images/xboxbg.png",
    title: "Пополнение баланса Xbox",
    image1: "/images/origin1icon.png",
    image2: "/images/origin2icon.png",
    description: "Введите логин от вашего Xbox аккаунта.",
  },
    blizzard: {
      name: "Blizzard",
      image:"/images/blizzardbg.png",
      icon:"/images/blizzardicon.png",
    title: "Пополнение баланса Blizzard",
    image1: "/images/origin1icon.png",
    image2: "/images/origin2icon.png",
    description: "Введите логин от вашего Blizzard аккаунта.",
  },

} as const;

export type GamePlatform = keyof typeof gameConfigs;
export type GameConfig = typeof gameConfigs[GamePlatform];