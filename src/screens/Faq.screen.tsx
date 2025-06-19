import { Faq } from "@/shared/components/sections/Faq/Faq";
import Breadcrumbs from "@/shared/components/ui/BreadCrums/BreadCrums";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";

export const FAQScreen = () => {
  return  (
    <>
    <Breadcrumbs />
    <Faq platform={APP_PAGES.FAQ.slug} />
    </>

  )
  
    
      
    
  
  
};
