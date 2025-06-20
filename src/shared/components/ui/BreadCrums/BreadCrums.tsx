"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Container } from "../containers/Container/Container";
import { IconArraw } from "../svg/IconFilterArraw";
import styles from "./BreadCrums.module.css";

const PATH_NAMES: Record<string, string> = {
  skins: "Купить скины",
  cs2: "Counter-Strike 2",
  dota2: "Dota 2",
  rust: "Rust",
  blog: "Блог",
  catalog: "Каталог",
  service: "Пополнить Баланс",
  guarantee: "Гарантии",
};

const formatSegment = (segment: string) =>
  segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

interface IRenderLink {
  href: string;
  title: string;
}
const BreadcrumbsLink: FC<IRenderLink> = ({ href, title }) => {
  return (
    <Link href={href} className={styles.text}>
      {title}
    </Link>
  );
};

interface IBreadcrumbsCurrent {
  title: string;
}

const BreadcrumbsCurrent: FC<IBreadcrumbsCurrent> = ({ title }) => {
  return (
    <span className={`${styles.text} ${styles.text_active}`}>{title}</span>
  );
};

interface IBreadcrumbs {
  customNames?: Record<string, string>;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ customNames = {} }) => {
  const pathname = usePathname() || "";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const breadcrumbs = segments.map((segment, index, array) => {
    const href = `/${array.slice(0, index + 1).join("/")}`;

    const isLast = index === array.length - 1;

    const title = isLast
      ? customNames[segment] || PATH_NAMES[segment] || formatSegment(segment)
      : PATH_NAMES[segment] || formatSegment(segment);

    return { href, title, isLast };
  });

  return (
    <Container>
      <div className={styles.root}>
        <BreadcrumbsLink href="/" title="Главная" />
        {breadcrumbs.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.separator}>
              <IconArraw />
            </span>

            {item.isLast && <BreadcrumbsCurrent title={item.title} />}
            {!item.isLast && (
              <BreadcrumbsLink href={item.href} title={item.title} />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
