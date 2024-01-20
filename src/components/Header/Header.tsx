import Link from 'next/link';
import { GithubIcon } from '@/components/shared/Icons';
import { Container } from '@/components/shared/Container';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <GithubIcon />
          Github Finder
        </Link>
      </Container>
    </header>
  );
};
