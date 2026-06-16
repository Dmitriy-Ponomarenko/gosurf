// src/components/LandingPage/BuySurfBoardSection/BuySurfBoardSection.tsx

import React from 'react';

import styles from './BuySurfBoardSection.module.css';

import '../../../index.css';

const BuySurfBoardSection: React.FC = () => {
  return (
    <section className={`${styles.buySection} section`}>
      <div className={`${styles.buyContainer} container`}>
        <h2>shop</h2>

        <article className={styles.buyProductCard}>
          <span className={styles.buyProductCategory}>Style</span>
          <h3 className={styles.buyProductTitle}>North Nugget TT Surfboard</h3>

          <div
            className={styles.buyProductRating}
            aria-label="5 out of 5 stars"
          >
            ★★★★★
          </div>

          <p className={styles.buyProductPrice}>
            <data value="799.99">$799.99</data>
          </p>

          <a
            href="/products/north-nugget-tt"
            className={styles.buyProductButton}
          >
            Drop In
          </a>

          <div className={styles.buyProductDescription}>
            <p>Double Concave with Vee Shape Low Point</p>
            {/* optional description */}
          </div>
        </article>
        <div aria-labelledby="extras-title">
          <h4 id="extras-title">Extras</h4>

          <ul>
            <li>
              <span>Sex Wax</span>
              <data value="24.99">$24.99</data>
            </li>

            <li>
              <span>Pura Vida</span>
              <data value="27.99">$27.99</data>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BuySurfBoardSection;
