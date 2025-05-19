import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TDiv } from "@/shared/typing/elements.type";
import Image from "next/image";
import { FC } from "react";
import styles from "./HeroSecondary.module.css";

export const HeroSecondary: FC<TDiv> = ({}) => {
  return (
    <Container className={styles.root}>
      <div className={styles.item}>
        <Image
          src="/images/heroicon1.png"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className={styles.image}
        />
        <div className={styles.text_wrapper}>
          <p className={styles.title}>Широкий выбор скинов</p>
          <p className={styles.text}>
            У нас представлены тысячи редких и эксклюзивных скинов для Dota 2
            и CS2.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src="/images/heroicon2.png"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className={styles.image}
        />
        <div className={styles.text_wrapper}>
          <p className={styles.title}>Мгновенная доставка</p>
          <p className={styles.text}>
            После оплаты скины моментально доставляются на ваш аккаунт.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src="/images/heroicon3.png"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className={styles.image}
        />
        <div className={styles.text_wrapper}>
          <p className={styles.title}>Доступные цены</p>
          <p className={styles.text}>
            Мы предлагаем конкурентные цены и регулярные скидки.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src="/images/heroicon4.png"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className={styles.image}
        />
        <div className={styles.text_wrapper}>
          <p className={styles.title}>Безопасные платежи</p>
          <p className={styles.text}>
            Ваши данные защищены. Покупайте скины с уверенностью в полной
            безопасности.
          </p>
        </div>
      </div>
    </Container>
  );
};
