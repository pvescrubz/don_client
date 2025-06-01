import { SKINS_CONFIG } from "@/shared/content/buyskins.config";
import Image from "next/image";
import { FC } from "react";
import { Title } from "../../ui/Title/Title";
import styles from "./SkinsHead.module.css";

interface ISkinsHead {
  game: string;
}

export const SkinsHead: FC<ISkinsHead> = ({ game }) => {
  const content = SKINS_CONFIG[game];
  return (
    <>
      {content && (
        <div className={styles.root}>
          <Title className={styles.title} h1>
            {content.mainTitle}
          </Title>
          <Image
            src={content.bgimage}
            width={550}
            height={367}
            alt={game}
            className={styles.bgimage}
            quality={100}
          />
        </div>
      )}
    </>
  );
};
