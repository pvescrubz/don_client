
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../containers/Container/Container';
import styles from './BreadCrums.module.css';

const PATH_NAMES: Record<string, string> = {
  skins: 'Купить скины',
  cs2: 'Counter-Strike 2',
  dota2: 'Dota 2',
  rust: 'Rust',
  blog: 'Блог',
  catalog: 'Каталог',
  service: 'Пополнить Баланс',
  guarantee: 'Гарантии',
};

const formatSegment = (segment: string) =>
  segment
    .replace(/-/g, ' ') 
    .replace(/\b\w/g, c => c.toUpperCase()); 

const renderLink = (href: string, title: string) => (
  <Link href={href} className={styles.text}>
    {title}
  </Link>
);

const renderCurrent = (title: string) => (
  <span className={`${styles.text} ${styles.text_active}`}>{title}</span>
);

export default function Breadcrumbs({ customNames = {} }: { customNames?: Record<string, string> }) {
  const pathname = usePathname() || ''; 
  const segments = pathname.split('/').filter(Boolean);

  console.log('Pathname:', pathname);
  console.log('Segments:', segments); 
  console.log('Custom Names:', customNames); 

  
  if (segments.length === 0) return null;


  const breadcrumbs = segments.map((segment, index, array) => {
    const href = `/${array.slice(0, index + 1).join('/')}`;
    const isLast = index === array.length - 1;


    const title = isLast
      ? customNames[segment] || PATH_NAMES[segment] || formatSegment(segment)
      : PATH_NAMES[segment] || formatSegment(segment);

    return { href, title, isLast };
  });

  return (
    <Container>
      <div className={styles.container}>
 
        {renderLink('/', 'Главная')}

        
        {breadcrumbs.map((item, index) => (
          <div key={index}>
            <span className={styles.separator}> {'>'} </span>
            {item.isLast ? renderCurrent(item.title) : renderLink(item.href, item.title)}
          </div>
        ))}
      </div>
    </Container>
  );
}