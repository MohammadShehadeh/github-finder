import React, { ReactNode } from 'react';

import cx from 'classnames';

import styles from './Container.module.scss';

type Size = 'full' | 'contain';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: Size;
  as?: 'section' | 'div';
}

export const Container = ({
  as: As = 'div',
  size = 'contain',
  children,
  className,
}: ContainerProps) => {
  return (
    <As className={cx(styles.container)}>
      <div
        className={cx(className, {
          [styles[size]]: size,
        })}
      >
        {children}
      </div>
    </As>
  );
};
