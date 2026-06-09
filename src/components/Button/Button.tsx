import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

type ButtonVariant = 'default' | 'ghost' | 'primary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  secondary?: React.ReactNode;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  secondary,
  type = 'button',
  variant = 'default',
  ...props
}) => {
  const variantClass = variant === 'default' ? '' : styles[variant];

  return (
    <button
      type={type}
      className={`${styles.button} ${variantClass} ${className}`.trim()}
      {...props}
    >
      <span className={`${styles.side} ${styles.left}`}>{children}</span>
      {secondary !== undefined && secondary !== null ? (
        <>
          <span className={styles.divider} />
          <span className={`${styles.side} ${styles.right}`}>{secondary}</span>
        </>
      ) : null}
    </button>
  );
};

export default Button;
