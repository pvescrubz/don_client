import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";
import { redirect } from "next/navigation";

const META = {
  title: "Личный кабинет | DonViche",
  description: "Личный кабинет | DonViche",
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
  },
  robots: DISABLED_ROBOTS,
};

const Page = () => {
  return redirect(PRIVATE_PAGES.ACCOUNT_BALANCE.slug);
};

export default Page;
