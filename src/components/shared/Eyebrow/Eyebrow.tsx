import styles from './Eyebrow.module.scss';
import cx from 'classnames';

type variants = 'contained' | 'outlined';

interface EyebrowProps {
  label?: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: variants;
}

export const Eyebrow = ({
  label,
  className,
  color = 'primary',
  variant = 'contained',
}: EyebrowProps) => {
  return (
    <span
      className={cx(styles.eyebrow, className, {
        [styles[variant]]: variant,
        [styles[color]]: color,
      })}
    >
      <span className={styles.label}>{label}</span>
    </span>
  );
};
