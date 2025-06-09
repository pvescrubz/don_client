import { AddBalance } from "@/shared/components/sections/AddBalance/AddBalance";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { HowToAddBalance } from "@/shared/components/sections/HowAddBalance/HowAddBalance";
import { FC } from "react";
interface IAddBalancePage {
  platform: string;
}

export const AddBalancePage: FC<IAddBalancePage> = ({ platform }) => {
  if (!platform) return <div>fallback</div>;

  return (
    <>
      <AddBalance platform={platform} />;
      <HowToAddBalance platform={platform} />
      <Faq platform={platform} />
    </>
  );
};

export default AddBalancePage;
