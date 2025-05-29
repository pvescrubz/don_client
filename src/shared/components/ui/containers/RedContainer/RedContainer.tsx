import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import styles from "./RedContainer.module.css";

export const RedContainer: FC<TDiv> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {children}
      <Image
        src="/images/redbg.png"
        alt="red"
        width={1920}
        height={3420}
        className={styles.image}
        quality={100}
      />
    </div>
  );
};
