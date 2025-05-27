import { Faq } from "@/shared/components/sections/Faq/Faq";
import { FC } from "react";
interface IFaqPage {
  platform: string;
}

export const FAQPage: FC<IFaqPage> = ({ platform }) => {

  console.log( platform );
  return (
    <>
    <Faq platform={platform} />
    </>
  );
};
export default FAQPage;
