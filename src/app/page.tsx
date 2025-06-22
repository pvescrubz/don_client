import { HomeScreen } from "@/screens/Home.screen";
import { CONFIG } from "@/shared/model/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `${CONFIG.APP_BASE_URL}}`,
  },
};

const Page = () => {
  return <HomeScreen />;
};

export default Page;
