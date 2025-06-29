"use client";

import { bloggers } from "@/shared/content/bloggers.config";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./Blogers.module.css";

export interface IBloggersProps {
  bloggers?: Array<{
    name: string;
    followers: string;
    image: string;
    href: string;
  }>;
}

export const Bloggers: FC<IBloggersProps> = ({ bloggers: propBloggers }) => {
  const displayBloggers = propBloggers || bloggers;
  const [visibleCount, setVisibleCount] = useState(12);
  const [cardsPerRow, setCardsPerRow] = useState(6);

  useEffect(() => {
    const updateCardsPerRow = () => {
      const newCardsPerRow = window.innerWidth > 1024 ? 6 : 3;
      setCardsPerRow(newCardsPerRow);
      setVisibleCount(newCardsPerRow * 2);
    };
    updateCardsPerRow();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + cardsPerRow * 2);
  };

  const visibleBloggers = displayBloggers.slice(0, visibleCount);
  return (
    <Section>
      <Container>
        <Title>БЛОГЕРЫ РЕКОМЕНДУЮТ</Title>
        <div className={styles.root}>
          {visibleBloggers.map((blogger, index) => (
            <Link
              key={index}
              href={blogger.href}
              rel="nofollow noreferrer"
              className={styles.card}
            >
              <div className={styles.info}>
                <Image
                  src={blogger.image}
                  alt={blogger.name}
                  width={100}
                  height={100}
                  className={styles.img}
                />
                <div className={styles.name}>{blogger.name}</div>
                <div className={styles.followers}>{blogger.followers}</div>
              </div>
            </Link>
          ))}
        </div>
        {visibleCount < displayBloggers.length && (
          <div className={styles.button_box}>
            <Button
              size="large"
              variant="primary"
              onClick={handleShowMore}
              className={styles.button}
            >
              Показать еще
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
};
