import { Title } from "@/shared/components/ui/Title/Title";
import { THeading } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./SkinTitle.module.css";

interface ISkinTitle extends THeading {
  title: string;
}

export const SkinTitle: FC<ISkinTitle> = ({ title, className, ...rest }) => {
  return (
    <Title h1 className={clsx(styles.root, className)} {...rest}>
      {title}
    </Title>
  );
};
