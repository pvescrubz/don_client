import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TFooter } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";

import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { LogoLink } from "../../parts/LogoLink/LogoLink";
import { FooterLink } from "../../ui/FooterLink/FooterLink";
import styles from "./Footer.module.css";

export const Footer: FC<TFooter> = ({ className, ...rest }) => {
  const skins = APP_PAGES.getSkins();
  const balance = APP_PAGES.getBalance();
  const useful = APP_PAGES.getUseful();

  return (
    <footer className={clsx(styles.root, className)} {...rest}>
      <Container>
        <nav className={styles.nav}>
          <div>
            <LogoLink className={styles.logo} />
            <p className={styles.text}>
              Надежный сервис для покупки скинов  пополнения баланса
            </p>
          </div>
          {skins && (
            <div>
              <p className={styles.title}>Маркет</p>
              <ul>
                {skins.map((item, index) => (
                  <li key={index}>
                    <FooterLink href={item.slug}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {balance && (
            <div>
              <p className={styles.title}>Баланс</p>
              <ul>
                {balance.map((item, index) => (
                  <li key={index}>
                    <FooterLink href={item.slug}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {useful && (
            <div>
              <p className={styles.title}>Полезное</p>
              <ul>
                {useful.map((item, index) => (
                  <li key={index}>
                    <FooterLink href={item.slug}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        <div className={styles.bot}>
          <div>
            <p className={styles.copy}>© 2025 DonViche, Все права защищены</p>
            <p className={styles.copy}>
              Powered by Steam. Not affileated with Valve Corp.
            </p>
            <div className={styles.links}>
              <FooterLink href={"/privacy"} target="_blank">
                Политика конфиденциальности
              </FooterLink>
              <FooterLink href={"/terms"} target="_blank">
                Публичная оферта
              </FooterLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
