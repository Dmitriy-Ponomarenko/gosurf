import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiDroplet, FiWind } from 'react-icons/fi';
import { GiWaves } from 'react-icons/gi';

import { SectionHeading, SectionLabel } from '../SectionParts';

import styles from './LocationSection.module.css';

const spots = [
  {
    name: 'North Shore',
    country: 'Hawaii, USA',
    longitude: -158.06,
    latitude: 21.64,
    surf: '6 - 10',
    tide: '+1.4',
    wind: '7 NE',
  },
  {
    name: 'Malibu Beach',
    country: 'California, USA',
    longitude: -118.78,
    latitude: 34.03,
    surf: '3 - 5',
    tide: '+1.2',
    wind: '5 W',
  },
  {
    name: 'Vieux Boucau',
    country: 'France',
    longitude: -1.41,
    latitude: 43.79,
    surf: '4 - 6',
    tide: '+2.0',
    wind: '6 NW',
  },
  {
    name: 'Cloud Nine',
    country: 'Philippines',
    longitude: 126.16,
    latitude: 9.85,
    surf: '5 - 8',
    tide: '+1.8',
    wind: '4 E',
  },
  {
    name: 'Airlie Beach',
    country: 'Australia',
    longitude: 148.72,
    latitude: -20.27,
    surf: '9 - 13',
    tide: '+2.3',
    wind: '4 SE',
  },
  {
    name: 'South Africa',
    country: 'South Africa',
    longitude: 24.92,
    latitude: -34.05,
    surf: '4 - 7',
    tide: '+1.5',
    wind: '8 SW',
  },
] as const;

export default function LocationSection() {
  const [selected, setSelected] = useState(4);
  const [cardVisible, setCardVisible] = useState(true);
  const dismissTimer = useRef<number | null>(null);
  const spot = spots[selected] ?? spots[0];
  const spotX = ((spot.longitude + 180) / 360) * 100;
  const spotY = ((85 - spot.latitude) / 145) * 100;

  useEffect(() => {
    dismissTimer.current = window.setTimeout(() => {
      setCardVisible(false);
      dismissTimer.current = null;
    }, 5000);

    return () => {
      if (dismissTimer.current !== null)
        window.clearTimeout(dismissTimer.current);
    };
  }, []);

  const cancelDismiss = () => {
    if (dismissTimer.current !== null) {
      window.clearTimeout(dismissTimer.current);
      dismissTimer.current = null;
    }
  };

  const revealCard = () => {
    cancelDismiss();
    setCardVisible(true);
  };

  const selectSpot = (index: number) => {
    setSelected(index);
    revealCard();
  };

  const scheduleDismiss = () => {
    cancelDismiss();
    dismissTimer.current = window.setTimeout(() => {
      setCardVisible(false);
      dismissTimer.current = null;
    }, 5000);
  };

  return (
    <section id="surf-section" className={styles.section}>
      <SectionHeading title="Surf" />
      <div className={styles.location}>
        <SectionLabel>Featured location</SectionLabel>
        <h3>
          California <span>|</span> USA
        </h3>
      </div>
      <div className={`${styles.map} ${cardVisible ? styles.mapHasCard : ''}`}>
        <div className={styles.mapCanvas}>
          <img src="/images/world-map.svg" alt="" aria-hidden="true" />
          {spots.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`${styles.dot} ${selected === index ? styles.selected : ''}`}
              style={{
                left: `${((item.longitude + 180) / 360) * 100}%`,
                top: `${((85 - item.latitude) / 145) * 100}%`,
              }}
              onClick={() => {
                setSelected(index);
                setCardVisible(true);
              }}
              onMouseEnter={() => selectSpot(index)}
              onMouseLeave={scheduleDismiss}
              onFocus={() => selectSpot(index)}
              onBlur={scheduleDismiss}
              onTouchStart={() => selectSpot(index)}
              onTouchEnd={scheduleDismiss}
              aria-label={`Show ${item.name}`}
              aria-pressed={selected === index}
            />
          ))}
          <div
            className={`${styles.card} ${cardVisible ? styles.cardVisible : ''}`}
            style={{
              left: `${spotX}%`,
              top: `${spotY}%`,
              transform: `translate(${spotX > 55 ? 'calc(-100% - 16px)' : '16px'}, -50%)`,
            }}
            aria-live="polite"
            aria-hidden={!cardVisible}
            onMouseEnter={revealCard}
            onMouseLeave={scheduleDismiss}
            onTouchStart={revealCard}
            onTouchEnd={scheduleDismiss}
          >
            <strong>{spot.name}</strong>
            <FiArrowRight aria-hidden="true" />
            <p>{spot.country}</p>
            <div className={styles.metrics}>
              <div>
                <GiWaves />
                <b>{spot.surf}</b>
                <small>Surf (ft)</small>
              </div>
              <div>
                <FiDroplet />
                <b>{spot.tide}</b>
                <small>Tide (ft)</small>
              </div>
              <div>
                <FiWind />
                <b>{spot.wind}</b>
                <small>Wind (kts)</small>
              </div>
            </div>
            <small className={styles.sample}>Illustrative conditions</small>
          </div>
        </div>
      </div>
    </section>
  );
}
