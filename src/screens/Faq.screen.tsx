import { Faq } from "@/shared/components/sections/Faq/Faq";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";

const FAQScreen: FC = () => {
  return <Faq platform={APP_PAGES.FAQ.slug} />;
};

export default FAQScreen;
