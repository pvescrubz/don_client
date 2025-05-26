import { AddBalance } from "@/shared/components/sections/AddBalance/AddBalance";
import { FC } from "react";
interface IAddBalancePage {
  platform: string;
}

export const AddBalancePage: FC<IAddBalancePage> = ({ platform }) => {

  return <AddBalance platform={platform} />;
};

export default AddBalancePage;
