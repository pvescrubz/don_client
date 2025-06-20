import { statisticsService } from "@/feature/statistics/statistics.service";
import { TDiv } from "@/shared/typing/elements.type";
import { FC } from "react";
import { StatisticsList } from "../../parts/statistics/StatisticsList/StatisticsList";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";

export const Statistic: FC<TDiv> = async () => {
  const statistics = await statisticsService.get();
  if (!statistics) return null;

  return (
    <>
      <Section>
        <Container>
          <Title>Продано ВСЕГО</Title>
          <StatisticsList stats={statistics} />
        </Container>
      </Section>
    </>
  );
};
