import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';
import '../../index.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftText: string;
  rightText?: string | null;
  variant?: 'arrows' | 'simple';
}

const Button: React.FC<ButtonProps> = ({
  leftText,
  rightText,
  variant = 'simple',
  className = '',
  ...props
}) => {
  const isComplex = variant === 'arrows';

  const hasRightText =
    rightText !== undefined && rightText !== null && rightText.trim() !== '';

  return (
    <button
      type="button"
      className={`${styles.button} ${isComplex ? styles.complex : ''} ${className}`.trim()}
      {...props}
    >
      <span className={styles.left}>{leftText}</span>

      {isComplex && hasRightText && (
        <>
          <span className={styles.divider}>—</span>
          <span className={styles.right}>
            {rightText}
            <span className={styles.arrow}>→</span>
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
