import Image from 'next/image';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { Container } from '@/components/shared/Container';
import { WaveIcon } from '@/components/shared/Icons';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.background} style={{ backgroundImage: 'url("/hero.jpg")' }}>
          <Container className={styles.wrapper}>
            <Eyebrow label="Unleash" variant="outlined" />
            <h1 className={styles.headline}>
              Empower Your Code Journey with GitHub Finder <br /> Uncover, Collaborate, and
              Thrive in the Realm of Open Source Excellence!
            </h1>
          </Container>
        </div>
      </section>
      <WaveIcon className={styles.separator} />
    </>
  );
};
