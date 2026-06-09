import React from 'react';

import Button from '@/components/Button/Button';

import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const navItems = [
    { id: 'surf', label: 'Surf', sectionId: 'resorts-section' },
    { id: 'travel', label: 'Travel', sectionId: 'travel-section' },
    { id: 'sleep', label: 'Sleep', sectionId: 'resorts-section' },
    { id: 'shop', label: 'Shop', sectionId: 'surfboard-section' },
  ];

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.navContainer}>
        {navItems.map(item => (
          <Button
            key={item.id}
            className={styles.navButton}
            onClick={() => handleNavClick(item.sectionId)}
            title={item.label}
          >
            <svg className={styles.icon} aria-hidden="true">
              <use href={`#${item.id}`} />
            </svg>
            <span className={styles.label}>{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
