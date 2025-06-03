import { FAQ_CONFIG } from "@/shared/content/faq.config";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";
import { Accordion } from "../../parts/Accordion/Accordion";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";

interface IConfig {
  platform: string;
}

export const Faq: FC<IConfig> = ({ platform }) => {
  const items = FAQ_CONFIG[platform];

  return (
    <>
      <Section>
        <Container>
          <Title h1={platform === APP_PAGES.FAQ.slug}>FAQ</Title>
          <Accordion items={Object.values(items)} />
        </Container>
      </Section>
    </>
  );
};
