import { Activate } from "@/shared/components/sections/Activate/Activate";
import { FC } from "react";

interface IActivateScreen {
  token: string;
}

const ActivateScreen: FC<IActivateScreen> = ({ token }) => {
  return <Activate token={token} />;
};

export default ActivateScreen;
