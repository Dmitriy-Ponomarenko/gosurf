import React from 'react';

import styles from './Curtain.module.css';

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
    <div className={styles.curtain} role="group" aria-label={title}>
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

      <div className={styles.title}>{title}</div>

      <div className={styles.leftLabel} aria-hidden>
        <span>{location}</span>
      </div>

      {active && (
        <button
          type="button"
          className={styles.viewButton}
          aria-label="View - Surf"
        >
          View - Surf →
        </button>
      )}

      {!active && <div className={styles.mask} />}
    </div>
  );
};

export default Curtain;
