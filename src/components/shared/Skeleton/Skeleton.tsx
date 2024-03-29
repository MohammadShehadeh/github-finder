import React from 'react';

import styles from './Skeleton.module.scss';

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.loading}></div>
    </div>
  );
};
