import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";
import { redirect } from "next/navigation";

const META = {
  title: "Каталог скинов для CS2, Dota 2 и Rust | Don Viche",
  description: `Выберите игру — CS2, Dota 2 или Rust — и найдите лучшие скины на Don Viche.`,
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  robots: DISABLED_ROBOTS,
  openGraph: {
    ...META,
  },
};

const Page = () => {
  return redirect(APP_PAGES.SKINS.slug);
};

export default Page;
