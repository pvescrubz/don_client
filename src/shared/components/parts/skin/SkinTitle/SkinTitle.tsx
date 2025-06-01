import { Title } from "@/shared/components/ui/Title/Title";
import { FC } from "react";
interface ISkinTitle {
  title: string;
  quality?: string;
}

export const SkinTitle: FC<ISkinTitle> = ({ title, quality }) => {
  return (
    <Title h1>
      {title} {quality && <>({quality})</>}
    </Title>
  );
};
