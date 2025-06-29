import { skinsService } from "@/feature/skins/skins.service";
import { FC } from "react";
import Slider from "../../parts/Slider/Slider";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";

export const LastBuy: FC = async () => {
  const items = await skinsService.getLastBuy();
  return (
    <>
      {items && items.length > 0 && (
        <Section>
          <Title>Последние покупки</Title>
          <Slider items={items} />
        </Section>
      )}
    </>
  );
};
