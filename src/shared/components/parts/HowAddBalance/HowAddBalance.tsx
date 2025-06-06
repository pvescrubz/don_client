
import { PLATFORM_CONFIG } from "@/shared/content/platorms.config";
import Image from "next/image";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./HowAddBalance.module.css";

interface IHowAddBalance {
  platform: string;
}

export const HowToAddBalance: FC<IHowAddBalance> = ({ platform }) => {
  const { name } = PLATFORM_CONFIG[platform];

  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <Title>Как пополнить баланс</Title>
          <div className={styles.container}>
            <div className={styles.steps_item}>
              <div className={styles.step}>
                <Image
                  src="/images/howaddbalanceRED.png"
                  alt="Step 1"
                  width={80}
                  height={80}
                  className={styles.step_image}
                />
                <p className={styles.step_circle}>01</p>
              </div>
              <p className={styles.text}>Введи свой логин {name}</p>
            </div>
            <div className={styles.steps_item}>
              <div className={styles.step}>
                <Image
                  src="/images/howaddbalanceRED.png"
                  alt="Step 1"
                  width={80}
                  height={80}
                  className={styles.step_image}
                />
                <p className={styles.step_circle}>02</p>
              </div>
              <p className={styles.text}>Укажите сумму пополнения</p>
            </div>
            <div className={styles.steps_item}>
              <div className={styles.step}>
                <Image
                  src="/images/howaddbalanceRED.png"
                  alt="Step 1"
                  width={80}
                  height={80}
                  className={styles.step_image}
                />
                <p className={styles.step_circle}>03</p>
              </div>
              <p className={styles.text}>Оплатите удобным способом</p>
            </div>
            <div className={styles.steps_item}>
              <div className={styles.step}>
                <Image
                  src="/images/howaddbalanceRED.png"
                  alt="Step 1"
                  width={80}
                  height={80}
                  className={styles.step_image}
                />
                <p className={styles.step_circle}>04</p>
              </div>
              <p className={styles.text}>Получите деньги на баланс {name}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
