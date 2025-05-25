import { faqArray } from "@/shared/lib/faq.config";
import { Accordion } from "../../parts/Accordion/Accordion";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";

export const Faq = () => {
  return (
    <>
      <Section>
        <Container>
          <Accordion items={faqArray} />
        </Container>
      </Section>
    </>
  );
};
