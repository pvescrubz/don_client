import { FC } from "react";
import { Section } from "../../ui/containers/Section/Section";

interface ISkinsHead {
  game: string;
}

export const SkinsHead: FC<ISkinsHead> = () => {
  return <Section>head </Section>;
};
