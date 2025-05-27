import { AddBalance } from "@/shared/components/sections/AddBalance/AddBalance";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { FC } from "react";
interface IAddBalancePage {
  platform: string;
}

export const AddBalancePage: FC<IAddBalancePage> = ({ platform }) => {
  console.log(platform)
  return (
  <>
    <AddBalance platform={platform} />;
    <Faq platform={platform} />
  </>
  )
};

export default AddBalancePage;
