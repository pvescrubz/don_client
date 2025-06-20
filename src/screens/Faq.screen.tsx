import { Faq } from "@/shared/components/sections/Faq/Faq";
import { Breadcrumbs } from "@/shared/components/ui/BreadCrums/BreadCrums";
import { RedContainer } from "@/shared/components/ui/containers/RedContainer/RedContainer";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";

export const FAQScreen = () => {
  return (
    <>
      <RedContainer>
        <Breadcrumbs />
        <Faq platform={APP_PAGES.FAQ.slug} />
      </RedContainer>
    </>
  );
};
