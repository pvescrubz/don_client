import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";
import { redirect } from "next/navigation";

const META = {
  title:
    "DonViche | Пополнение баланса Steam, Epic Games, PlayStation, XBox и Blizzard",
  description: `Надёжное пополнение баланса Steam, Epic Games, PlayStation, XBox и Blizzard . Быстро, безопасно и без скрытых комиссий. — с Don Viche легко.`,
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
  return redirect(APP_PAGES.BALANCE.slug);
};

export default Page;
