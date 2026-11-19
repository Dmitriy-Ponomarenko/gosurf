import { useState } from 'react';

import { SectionHeading, SectionLabel } from '../SectionParts';

import styles from './BuySurfBoardSection.module.css';

const details = [
  {
    label: 'Board shape',
    text: 'Double concave with vee shape low point',
    className: 'shape',
  },
  { label: 'Rails', text: 'Shaped rails for smooth turns', className: 'rails' },
  { label: 'Tail', text: 'Tail designed for control', className: 'tail' },
] as const;

export default function BuySurfBoardSection() {
  const [active, setActive] = useState(0);
  return (
    <section className={styles.buySection}>
      <SectionHeading title="Shop" />
      <div className={styles.layout}>
        <div className={styles.product}>
          <SectionLabel>Style</SectionLabel>
          <h3>
            North Nugget TT
            <br /> Surfboard
          </h3>
          <div className={styles.rating} aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <strong className={styles.price}>$799.99</strong>
          <p>Product details are illustrative. Shop coming soon.</p>
        </div>
        <div className={styles.boardArea}>
          <div
            className={styles.board}
            aria-label="Illustration of a surfboard"
          >
            <span className={styles.boardLogo}>NORTH</span>
            {details.map((detail, index) => (
              <button
                key={detail.label}
                type="button"
                className={`${styles.hotspot} ${styles[detail.className]}`}
                aria-label={detail.label}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                {active === index ? '−' : '+'}
              </button>
            ))}
          </div>
          <p className={styles.description} aria-live="polite">
            {(details[active] ?? details[0]).text}
          </p>
        </div>
        <div className={styles.extras}>
          <h4>Extras</h4>
          <div>
            <span>Sex Wax</span>
            <strong>$24.99</strong>
          </div>
          <div>
            <span>Pura Vida</span>
            <strong>$27.99</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
