/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Image from 'next/image';

import { Eyebrow } from '@/components/shared/Eyebrow';

import styles from './Card.module.scss';

interface CardProps {
  image?: string;
  name?: string;
  url: string;
  language?: string;
  forksCount?: number;
  starsCount?: number;
}

export const Card = ({
  image = '/placeholder.png',
  name = 'Github Profile Image',
  url,
  language,
  forksCount,
  starsCount,
}: CardProps) => {
  return (
    <a className={styles.card} href={url} target="_blank" rel="noopener noreferrer">
      <Image width={100} height={100} src={image} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      {language && <Eyebrow color="secondary" className={styles.language} label={language} />}
      {!!forksCount && (
        <Eyebrow color="tertiary" className={styles.forks} label={`Fork: ${forksCount}`} />
      )}
      {!!starsCount && (
        <Eyebrow color="tertiary" className={styles.stars} label={`Star: ${starsCount}`} />
      )}
    </a>
  );
};
