import { FAQ_CONFIG } from "@/shared/lib/faq.config";
import { FC } from "react";
import { Accordion } from "../../parts/Accordion/Accordion";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";

interface IConfig {
  platform: string;
}

export const Faq: FC<IConfig> = ({platform}) => {
  const config = FAQ_CONFIG[platform];
  return (
    <>
      <Section>
        <Container>
          <Title>FAQ</Title>
          <Accordion config={config} />
        </Container>
      </Section>
    </>
  );
};
