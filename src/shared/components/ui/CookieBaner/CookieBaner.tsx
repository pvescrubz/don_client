"use client";

import { FC, useEffect, useState } from "react";
import { getCookie, setCookie } from "../../../utils/cookies";
import { Button } from "../Button/Button";
import styles from "./CookieBaner.module.css";

export const CookieBaner: FC = () => {
  const [show, setShow] = useState<boolean | null>(null);

  const giveCookei = () => {
    setCookie("cookieBaner", "true", { path: "/" });
    setShow(false);
  };

  useEffect(() => {
    const parse = getCookie<boolean>("cookieBaner");
    if (!parse) setShow(true);
  }, []);

  return (
    <>
      {show && typeof show === "boolean" && (
        <div className={styles.root}>
          <div className={styles.cookie__wrapper}>
            <p>
              Мы используем <span className={styles.span}>cookie</span> для улучшения
              вашего пользовательского опыта на сайте
            </p>
            <div className={styles.btn__wrapper}>
              <Button
                type="button"
                size="small"
                onClick={giveCookei}
                className={styles.button}
              >
                Ок
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
