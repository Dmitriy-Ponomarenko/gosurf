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
  const bg2x = backgroundImage2x;

  return (
    <div className={styles.curtain} role="group" aria-label={title}>
      <img
        className={styles.bg}
        src={backgroundImage}
        srcSet={bg2x ? `${backgroundImage} 1x, ${bg2x} 2x` : ''}
        alt=""
        aria-hidden
      />

      <div className={styles.title}>{title}</div>

      <div className={styles.leftLabel} aria-hidden>
        <span>{location}</span>
      </div>

      {!active && <div className={styles.mask} />}
    </div>
  );
};

export default Curtain;
