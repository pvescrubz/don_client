import Image from "next/image";
import { FC } from "react";
import styles from "./SkinImage.module.css";

interface ISkinImage {
  imageUrl: string;
}

export const SkinImage: FC<ISkinImage> = ({ imageUrl }) => {
  return (
    <div className={styles.root}>
      <Image
        src={imageUrl}
        alt="alt"
        width={318}
        height={238}
        className={styles.img}
      />
    </div>
  );
};
