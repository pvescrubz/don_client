import { FC } from "react";
import { Section } from "../../ui/containers/Section/Section";

interface ISkinsHead {
  game: string;
}

export const SkinsHead: FC<ISkinsHead> = () => {
  return (
    <Section>
      head Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus
      fugit tenetur, perspiciatis fugiat id nemo dolor? Aliquam fuga laudantium
      possimus, unde dicta animi quo consequuntur. Dicta voluptatem ex aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus fugit
      tenetur, perspiciatis fugiat id nemo dolor? Aliquam fuga laudantium
      possimus, unde dicta animi quo consequuntur. Dicta voluptatem ex aperiam.
    </Section>
  );
};
