import cx from 'classnames';
import React, { InputHTMLAttributes, RefObject } from 'react';

import styles from './Input.module.scss';

type InputProps = {
  className?: string;
  _ref?: RefObject<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, _ref, ...restProps }: InputProps) => {
  return <input className={cx(styles.input, className)} ref={_ref} {...restProps} />;
};
