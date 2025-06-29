import { skinsService } from "@/feature/skins/skins.service";
import { FC } from "react";
import Slider from "../../parts/Slider/Slider";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";

export const WeeklyProducts: FC = async () => {
  const items = await skinsService.getWeeklyProducts();

  return (
    <>
      {items && items.length > 0 && (
        <Section>
          <Title>Товары недели</Title>
          <Slider items={items} />
        </Section>
      )}
    </>
  );
};
