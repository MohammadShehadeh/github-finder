import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: 'small' | 'default';
  variant?: 'normal' | 'outlined' | 'contained';
}

export const Button = ({
  className,
  children,
  size = 'default',
  variant = 'contained',
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={cx(styles.button, styles[variant], styles[size], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
