import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.footerButton} href="#top">
        Go <span>Surf</span>
      </a>
      <p className={styles.footerText}>
        &copy; Go-Surf 2026. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
