import clsx from "clsx";
import Image from "next/image";

import { Container } from "@/shared/components/ui/containers/Container/Container";
import { Section } from "@/shared/components/ui/containers/Section/Section";
import { Title } from "@/shared/components/ui/Title/Title";
import styles from "./GuaranteeTop.module.css";

export const GuaranteeTop = () => {
  return (
    <Section className={styles.root}> 
      <Image
        src="/images/garantee.png"
        alt="alt"
        fill
        priority={true}
        className={styles.image}
      />
      <Container>
        <Title>ГАРАНТИИ</Title>
        <div className={styles.container}>
          <p className={styles.text}>Привет!</p>
          <p className={styles.text}>
            Ты попал на Don Viche — платформу, где за считанные минуты ты можешь
            приобрести скины для CS2, Dota 2 и Rust. У нас представлены только
            подлинные предметы, которые мгновенно отправляются в твой инвентарь.
            Давай расскажем, почему нам можно доверять. Более 3 миллионов
            человек уже купили скины у нас по самым выгодным ценам в сети.
          </p>

          <p className={styles.text}>Вот что мы предлагаем:</p>
          <p className={styles.title}>Что говорят наши клиенты?</p>
          <p className={styles.text}>
            Мы собрали более 10 000 отзывов от реальных покупателей, начиная с
            2017 года. К каждому отзыву прикреплена оценка и точная дата. Если
            хочешь, можешь зайти в профиль Steam автора отзыва, связаться с ним
            и лично обсудить его опыт работы с нами. Мы полностью уверены в
            достоверности каждого отзыва!
          </p>
          <p className={styles.title}>Независимые отзывы </p>
          <p className={styles.text}>
            Мы ценим мнение каждого покупателя и создали систему отзывов,
            которая гарантирует их честность и прозрачность. Все отзывы проходят
            тщательную проверку, чтобы убедиться в их подлинности. Мы не
            редактируем и не удаляем негативные комментарии, ведь именно
            обратная связь помогает нам становиться лучше. Будем рады, если
            после покупки ты поделишься своим мнением прямо на нашем сайте.
          </p>
          <p className={clsx(styles.title, styles.red)}>Осторожно: мошенники</p>
          <p className={styles.text}>
            Обрати внимание, что мы не можем гарантировать безопасность твоего
            аккаунта, если его взломали мошенники. Как такое возможно? Сейчас
            распространена схема, где злоумышленники крадут API key и подменяют
            твои обмены в Steam.
          </p>
          <p className={styles.text}>
            Не переживай — мы сделали всё, чтобы минимизировать риски. Если
            что-то пойдет не так, ты увидишь подробную инструкцию по решению
            проблемы. Также всегда можешь обратиться в наш онлайн-чат, где
            модераторы помогут разобраться с ситуацией.
          </p>
        </div>
      </Container>
      </Section>
  );
};
