import React from 'react';

import Button from '../Button/Button.tsx';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Button variant="arrows" leftText="Go" rightText="Flight" />
      <p className={styles.footerText}>
        &copy; Go-Surf 2026. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
