import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./Guarantee.module.css";

export const Guarantee: FC<TDiv> = () => {
  return (
    <Section className={styles.root}>
      <Container>
        <Title h1>ГАРАНТИИ</Title>
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

        <div className={styles.notic}>
          <div className={styles.notic_container}>
            <Image
              src="/images/alertgurantee.png"
              alt="alt"
              width={60}
              height={60}
            />
            <h2 className={styles.notic_title}>Предупреждение безопасности</h2>
            <p className={styles.notic_text}>
              В некоторых случаях злоумышленники могут получить доступ к вашему
              аккаунту Steam и совершить обмен. Это может привести к краже
              скинов. Чтобы избежать подобных ситуаций, мы рекомендуем соблюдать
              следующие меры безопасности:
            </p>

            <ol className={styles.list}>
              <li className={styles.item}>
                Измените пароль в настройках вашего аккаунта Steam на более
                надёжный.
              </li>
              <li className={styles.item}>
                Отзовите старые API-ключи, если вы когда-либо вводили их на
                сторонних сайтах. Сделать это можно{" "}
                <a
                  href="https://steamcommunity.com/dev/apikey"
                  className={styles.red}
                  rel="noreferrer noopener"
                >
                  здесь
                </a>
                . Генерировать новый ключ не нужно.
              </li>
              <li className={styles.item}>
                Смените вашу ссылку на обмен, чтобы сбросить возможные привязки.
                Сделать это можно{" "}
                <Link
                  href={PRIVATE_PAGES.ACCOUNT_BALANCE.slug}
                  className={styles.link}
                >
                  здесь
                </Link>
                . После входа в личный кабинет вы увидите, как найти и обновить
                ваш Trade URL в Steam.
              </li>
              <li className={styles.item}>
                Всегда проверяйте подлинность сайтов, на которых авторизуетесь
                через Steam. Фишинговые сайты — одна из самых частых причин
                взлома.
              </li>
              <li className={styles.item}>
                Если вы подозреваете, что ваш аккаунт был скомпрометирован,
                временно приостановите обмены и выполните действия выше.
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
};
