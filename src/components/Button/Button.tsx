import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';
import '../../index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  left: ReactNode;
  right: ReactNode;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  left,
  right,
  showArrow = true,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`.trim()}
      {...props}
    >
      {' '}
      <span className={styles.background} />
      <span className={styles.content}>
        <span className={styles.left}>{left}</span>

        <span aria-hidden="true" className={styles.divider}>
          —
        </span>

        <span className={styles.right}>
          {right}

          {showArrow && (
            <span aria-hidden="true" className={styles.arrow}>
              →
            </span>
          )}
        </span>
      </span>
    </button>
  );
};

export default Button;
