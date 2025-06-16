import { Activate } from "@/shared/components/sections/Activate/Activate";
import { FC } from "react";

interface IActivateScreen {
  token: string;
}

export const ActivateScreen: FC<IActivateScreen> = ({ token }) => {
  return <Activate token={token} />;
};
