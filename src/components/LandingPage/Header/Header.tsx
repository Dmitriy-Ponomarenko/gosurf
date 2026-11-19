import React from 'react';

import styles from './Header.module.css';
import NavigationIcon from './NavigationIcon';


const Header: React.FC<{ location: string }> = ({ location }) => {
  const navItems = [
    { id: 'surf', label: 'Surf', sectionId: 'surf-section' },
    {
      id: 'travel',
      label: 'Travel',
      sectionId: 'travel-section',
    },
    {
      id: 'sleep',
      label: 'Sleep',
      sectionId: 'resorts-section',
    },
    {
      id: 'shop',
      label: 'Shop',
      sectionId: 'surfboard-section',
    },
  ] as const;

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.sidebar}>
      <a className={styles.logo} href="#top" aria-label="Go Surf home">
        <strong>
          <span>Surf</span>
        </strong>
        <span className={styles.logoGo}>Go</span>
      </a>
      <div className={styles.navContainer}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={styles.navButton}
            onClick={() => handleNavClick(item.sectionId)}
            title={item.label}
          >
            <NavigationIcon name={item.id} />
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.sidebarLocation}>
        <span aria-hidden="true">⌖</span> {location}
      </div>
    </nav>
  );
};

export default Header;
