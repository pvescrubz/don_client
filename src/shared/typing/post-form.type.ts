export interface ITheme {
  value: string;
  image: string;
}

export const themes: ITheme[] = [
  { value: "ru", image: "/images/ru.png" },
  { value: "poland", image: "/images/poland.png" },
  { value: "india", image: "/images/india.png" },
  { value: "euro", image: "/images/euro.png" },
  { value: "england", image: "/images/england.png" },
  { value: "turkey", image: "/images/turkey.png" },
  { value: "argentina", image: "/images/argentina.png" },
] as const;

export type TThemes = (typeof themes)[number];
