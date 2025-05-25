"use client";
import { gameConfigs, GamePlatform } from "@/shared/lib/addBalanceGame.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AddBalanceGameForm } from "../../forms/addBalanceGamesForm/AddBalanceGameForm";
import { Title } from "../../ui/Title/Title";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./AddBalance.module.css";

export const AddBalance = () => {
  const pathname = usePathname();

  if (!pathname) {
    return null;
  }

  const currentPlatform = pathname.split("/").pop() as GamePlatform | undefined;

  const config = currentPlatform && gameConfigs[currentPlatform];
    const platforms = Object.keys(gameConfigs) as GamePlatform[];

  if (!config) {
    return <p>Конфигурация не найдена</p>;
  }



  return (
    <>
      <Section>
        <Container>
          <div className="header">
            <Title>Пополнить баланс</Title>
          </div>

          <div className={styles.nav}>
            {platforms.map((platform) => {
              const isActive = currentPlatform === platform;
              const { navicon, name, navimage } = gameConfigs[platform];

              return (
                <Link
                  key={platform}
                  href={`/service/${platform}`}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                  style={{
                    backgroundImage: `url(${navimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Image
                    src={navicon}
                    alt={name}
                    width={60}
                    height={60}
                    className={styles.navicon}
                  />
                  <span className={styles.button_text}>{name}</span>
                </Link>
              );
            })}
          </div>
          <AddBalanceGameForm config={config} />
        </Container>
      </Section>
    </>
  );
};
