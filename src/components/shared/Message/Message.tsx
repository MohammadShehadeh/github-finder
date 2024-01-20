import React from 'react';

import styles from './Message.module.scss';

interface MessageProps {
  title: string;
  description: string;
}

export const Message = ({ title, description }: MessageProps) => {
  return (
    <div className={styles.message}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
