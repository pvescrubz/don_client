import Image from "next/image";
import { FC } from "react";
import styles from "./WarningSteam.module.css";

export const WarningSteam: FC = () => {
  return (
    <div className={styles.root}>
      <Image
        src="/images/alert_button.png"
        alt="alt"
        width={44}
        height={44}
        className={styles.image}
      />
      <p className={styles.text}>
        Внимание: Указывайте только логин Steam. Мы пополняем аккаунты только из
        стран СНГ (Россия, Казахстан, Узбекистан и др.). Для пополнения
        аккаунтов из Крыма, Луганска и Донецка сперва прочтите гайд. Если сумма
        пополнения больше 500$ - напишите нам в чат поддержки!
      </p>
    </div>
  );
};
