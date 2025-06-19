import { AddBalance } from "@/shared/components/sections/AddBalance/AddBalance";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { HowToAddBalance } from "@/shared/components/sections/HowAddBalance/HowAddBalance";
import Breadcrumbs from "@/shared/components/ui/BreadCrums/BreadCrums";
import { FC } from "react";

interface IAddBalanceScreen {
  platform: string;
}

export const AddBalanceScreen: FC<IAddBalanceScreen> = ({ platform }) => {
  if (!platform) return <div>fallback</div>;

  return (
    <>
      <Breadcrumbs />
      <AddBalance platform={platform} />;
      <HowToAddBalance platform={platform} />
      <Faq platform={platform} />
    </>
  );
};
