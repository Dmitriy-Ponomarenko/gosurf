import React, { useState, useMemo } from 'react';

import styles from './ItemCard.module.css';

type ItemCardProps = {
  subtitle: string;
  description: string;
  ratingText: string;
  stars: number;
  basePrice: number;
  showQuantityControls?: boolean;
  destination?: string;
  distance?: string;
  travelTime?: string;
};

const ItemCard: React.FC<ItemCardProps> = ({
  subtitle,
  description,
  ratingText,
  stars,
  basePrice,
  showQuantityControls = false,
  destination = '',
  distance = '',
  travelTime = '',
}) => {
  const [nights, setNights] = useState(5);
  const [guests, setGuests] = useState(4);

  const price = useMemo(() => {
    if (showQuantityControls) {
      return basePrice * nights * guests;
    }
    return basePrice;
  }, [basePrice, nights, guests, showQuantityControls]);

  return (
    <div className={styles.itemCard}>
      <div className={styles.ratingSection}>
        <p className={styles.ratingText}>{ratingText}</p>
        <div className={styles.starsContainer}>{'★'.repeat(stars)}</div>
      </div>

      <div className={styles.infoSection}>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>

      {showQuantityControls ? (
        <div className={styles.controlsContainer}>
          <div className={styles.controlGroup}>
            <p className={styles.controlLabel}># of Nights</p>
            <div className={styles.quantityControl}>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() => setNights(n => Math.max(1, n - 1))}
                aria-label="Decrease nights"
              >
                −
              </button>
              <span className={styles.quantityValue}>{nights}</span>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() => setNights(n => n + 1)}
                aria-label="Increase nights"
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <p className={styles.controlLabel}># of Guests</p>
            <div className={styles.quantityControl}>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() => setGuests(g => Math.max(1, g - 1))}
                aria-label="Decrease guests"
              >
                −
              </button>
              <span className={styles.quantityValue}>{guests}</span>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() => setGuests(g => g + 1)}
                aria-label="Increase guests"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {destination && destination.length > 0 && (
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Destination</p>
                <p className={styles.detailValue}>{destination}</p>
              </div>
              {distance && distance.length > 0 && (
                <div className={styles.detailItem}>
                  <p className={styles.detailLabel}>Distance</p>
                  <p className={styles.detailValue}>{distance}</p>
                </div>
              )}
              {travelTime && travelTime.length > 0 && (
                <div className={styles.detailItem}>
                  <p className={styles.detailLabel}>Travel Time</p>
                  <p className={styles.detailValue}>{travelTime}</p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      <div className={styles.pricingSection}>
        <p className={styles.pricingLabel}>Pricing</p>
        <p className={styles.price}>
          ${price.toLocaleString()}
          <span className={styles.priceUnit}>USD</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
