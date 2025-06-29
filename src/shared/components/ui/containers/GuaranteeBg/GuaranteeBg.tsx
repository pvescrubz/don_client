import { TDiv } from "@/shared/typing/elements.type";
import Image from "next/image";
import { FC } from "react";

import styles from "./GuaranteeBg.module.css";

export const GuaranteeBg: FC<TDiv> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Image
        src="/images/garantee.png"
        alt="alt"
        fill
        priority={true}
        className={styles.image}
      />
      {children}
    </div>
  );
};
