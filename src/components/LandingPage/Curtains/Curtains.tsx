// src/components/LandingPage/Curtains/Curtains.tsx

import React, { useState } from 'react';

import Curtain from '@/components/Curtain/Curtain';

import styles from './Curtains.module.css';

const slides = [
  {
    id: 'malibu',
    title: 'Malibu Beach',
    location: 'California | USA',
    bg: '/images/malibu-beach.jpg',
    bg2x: '/images/malibu-beach@2x.jpg',
  },
  {
    id: 'airlie',
    title: 'Airlie Beach',
    location: 'Queensland | Australia',
    bg: '/images/airlie-beach.jpg',
    bg2x: '/images/airlie-beach@2x.jpg',
  },
  {
    id: 'cloud-nine',
    title: 'Cloud Nine',
    location: 'Siargao | Philippines',
    bg: '/images/cloud-nine.jpg',
    bg2x: '/images/cloud-nine@2x.jpg',
  },
  {
    id: 'vieux-boucau',
    title: 'Vieux Boucau',
    location: 'Hossegor | France',
    bg: '/images/vieux-boucau.jpg',
    bg2x: '/images/vieux-boucau@2x.jpg',
  },
];

const Curtains: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`${styles.curtainsSection} section`}>
      <div className={`${styles.curtainsContainer} container`}>
        <div className={styles.swiperWrap}>
          <div className={styles.navigationButtons}>
            <button
              type="button"
              className={styles.navButton}
              aria-label="Previous curtain"
              onClick={handlePrev}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.navButton}
              aria-label="Next curtain"
              onClick={handleNext}
            >
              →
            </button>
          </div>
          <div className={styles.curtainsGrid}>
            {slides.map((s, i) => (
              <Curtain
                key={s.id}
                title={s.title}
                location={s.location}
                backgroundImage={s.bg}
                backgroundImage2x={s.bg2x}
                active={i === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curtains;
