
import { TSection } from "@/shared/typing/elements.type";
import { FC } from "react";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";

export const Box: FC<TSection> = ({ children, ...rest }) => {
  return (
    <Section {...rest}>
      <Container>{children}</Container>
    </Section>
  );
};
