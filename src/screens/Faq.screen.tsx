import { Faq } from "@/shared/components/sections/Faq/Faq";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";

export const FAQScreen: FC = () => {
  return <Faq platform={APP_PAGES.FAQ.slug} />;
};
