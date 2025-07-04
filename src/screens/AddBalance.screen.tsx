import { AddBalance } from "@/shared/components/sections/AddBalance/AddBalance";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { HowToAddBalance } from "@/shared/components/sections/HowAddBalance/HowAddBalance";
import { RedContainer } from "@/shared/components/ui/containers/RedContainer/RedContainer";
import { Title } from "@/shared/components/ui/Title/Title";
import { FC } from "react";

interface IAddBalanceScreen {
  platform: string;
}

export const AddBalanceScreen: FC<IAddBalanceScreen> = ({ platform }) => {
  if (!platform) return <Title>Сервис временно недоступен</Title>;

  return (
    <>
      <RedContainer>
        <AddBalance platform={platform} />;
        <HowToAddBalance platform={platform} />
        <Faq platform={platform} />
      </RedContainer>
    </>
  );
};
