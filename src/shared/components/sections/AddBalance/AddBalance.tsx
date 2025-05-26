import { PLATFORM_CONFIG } from "@/shared/lib/platorms.config";
import { FC } from "react";
import { AddBalanceGameForm } from "../../forms/addBalanceGamesForm/AddBalanceGameForm";
import { AllBalanceNav } from "../../parts/AllBalanceNav/AllBalanceNav";
import { Title } from "../../ui/Title/Title";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";

interface IAddBalance {
  platform: string;
}

export const AddBalance: FC<IAddBalance> = ({ platform }) => {
  const config = PLATFORM_CONFIG[platform];

  return (
    <>
      <Section>
        <Container>
          <Title>Пополнить баланс</Title>
          <AllBalanceNav />
          {config && <AddBalanceGameForm config={config} />}
        </Container>
      </Section>
    </>
  );
};
