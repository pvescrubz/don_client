export interface IDashboardItem {
  name: string;
  slug: string;
  tag?: "useful" | "balance" | "skins";
  forHeader?: boolean;
}
