export interface IRegion {
  value: string;
  image: string;
  name: string;
}

export const REGIONS: IRegion[] = [
  // { value: "RU", name: "Россия", image: "/images/ru.png" },
  { value: "EU", name: "Европа", image: "/images/flag-euro.png" },
  { value: "KZ", name: "Казахстан", image: "/images/flag-kz.png" },
  { value: "US", name: "США", image: "/images/flag-usa.png" },
  { value: "TR", name: "Турция", image: "/images/flag-turkey.png" },
  { value: "PL", name: "Польша", image: "/images/flag-poland.png" },
  { value: "IN", name: "Индия", image: "/images/flag-india.png" },
  { value: "GB", name: "Великобритания", image: "/images/flag-england.png" },
  { value: "AR", name: "Аргентина", image: "/images/flag-argentina.png" },
] as const;

export type TRegions = (typeof REGIONS)[keyof typeof REGIONS];
