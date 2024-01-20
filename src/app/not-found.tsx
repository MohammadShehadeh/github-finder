'use client';

import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';

import styles from '@/styles/pages/NotFound.module.scss';

export default function NotFound() {
  return (
    <Container as="section">
      <div className={styles.notFound}>
        <title>Not Found</title>
        <Message title="Not Found!" description="There is nothing at this URL" />
        <Link href="/">Go Back Home</Link>
      </div>
    </Container>
  );
}
