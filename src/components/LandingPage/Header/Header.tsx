import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

import styles from './Header.module.css';
import NavigationIcon from './NavigationIcon';

const Header: React.FC<{
  location: string;
  date: string;
  currentTime: Date;
}> = ({ location, date, currentTime }) => {
  const [day, month, year] = date.split('|').map(part => part.trim());
  const localTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
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
      <div className={styles.sidebarMeta}>
        <div className={styles.sidebarDate}>
          <FiSearch aria-hidden="true" />
          <strong>{day}</strong>
          <time dateTime={`${year}-${month}-${day}`}>
            {month} | {year}
          </time>
        </div>
      </div>
      <div className={styles.sidebarLocation}>
        <FiMapPin aria-hidden="true" />
        <span>{location}</span>
      </div>
      <time
        className={styles.sidebarClock}
        dateTime={currentTime.toISOString()}
        aria-label={`Your local time: ${localTime}`}
      >
        {localTime}
      </time>
    </nav>
  );
};

export default Header;
