import Image from "next/image";
import { FC } from "react";

import styles from "./FormTitle.module.css";

interface IFormTitle {
  bg: string;
  title: string;
  logo: string;
}

export const FormTitle: FC<IFormTitle> = ({ bg, title, logo }) => {
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src={logo}
        alt="alt"
        width={60}
        height={60}
        className={styles.icon}
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
