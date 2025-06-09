import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import Link from "next/link";
import { FC } from "react";

import styles from "./PrivacyNotice.module.css";

export const PrivacyNotice: FC = () => {
  return (
    <p className={styles.root}>
      Нажимая кнопку пополнить, я принимаю условия{" "}
      <Link href={APP_PAGES.FAQ.slug} className={styles.link}>
        пользовательского соглашения
      </Link>
       и подтверждаю ознакомление с 
      <Link href={APP_PAGES.FAQ.slug} className={styles.link}>
        FAQ
      </Link>
      .
    </p>
  );
};
