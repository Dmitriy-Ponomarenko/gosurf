import React from 'react';

import styles from './Curtain.module.css';
import '../../index.css';

type Props = {
  title: string;
  location: string; // e.g. "California | USA"
  backgroundImage: string;
  backgroundImage2x?: string;
  active?: boolean;
};

const Curtain: React.FC<Props> = ({
  title,
  location,
  backgroundImage,
  backgroundImage2x,
  active = false,
}) => {
  return (
    <div
      className={`${styles.curtain} ${active ? styles.active : ''}`}
      role="group"
      aria-label={title}
    >
      {backgroundImage2x !== undefined ? (
        <img
          className={styles.bg}
          src={backgroundImage}
          srcSet={`${backgroundImage} 1x, ${backgroundImage2x} 2x`}
          alt=""
          aria-hidden
        />
      ) : (
        <img className={styles.bg} src={backgroundImage} alt="" aria-hidden />
      )}

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.leftLabel} aria-hidden>
        <p>{location}</p>
      </div>

      {active && (
        <a href="#surf-section" className={styles.curtainButton}>
          View <span>Surf →</span>
        </a>
      )}

      <div className={styles.mask} />
    </div>
  );
};

export default Curtain;
