import { NotFoundScreen } from "@/screens/NotFound.screen";
import { DISABLED_ROBOTS, NOT_FOUND } from "@/shared/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...NOT_FOUND,
  robots: DISABLED_ROBOTS,
  openGraph: {
    ...NOT_FOUND,
  },
};

const Page = () => {
  return <NotFoundScreen />;
};

export default Page;
