// src/components/LandingPage/Curtains/Curtains.tsx

import React, { useEffect, useRef, useState } from 'react';

import Curtain from '@/components/Curtain/Curtain';

import styles from './Curtains.module.css';
import '../../../index.css';

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
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartIndex = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const timer = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    setPaused(true);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    const startIndex = touchStartIndex.current;
    touchStartX.current = null;
    touchStartIndex.current = null;

    if (startX !== null && endX !== undefined) {
      if (Math.abs(endX - startX) > 40) {
        setActiveIndex(current =>
          endX < startX
            ? (current + 1) % slides.length
            : (current + slides.length - 1) % slides.length
        );
      } else if (startIndex !== null) {
        setActiveIndex(startIndex);
      }
    }

    setPaused(false);
  };

  return (
    <section className={`${styles.curtainsSection} section`}>
      <div className={`${styles.curtainsContainer} container`}>
        <h2 className="visually-hidden">Surfing spots</h2>
        <div
          className={styles.swiperWrap}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setPaused(false);
          }}
        >
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
          <div
            className={styles.curtainsGrid}
            data-active-index={activeIndex}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => {
              touchStartX.current = null;
              setPaused(false);
            }}
          >
            <div
              className={styles.curtainsTrack}
              style={
                {
                  '--active-offset': `${activeIndex * -25}%`,
                } as React.CSSProperties
              }
            >
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  className={
                    i === activeIndex ? styles.activeCurtain : undefined
                  }
                  tabIndex={0}
                  aria-label={`${s.title}, ${s.location}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onTouchStart={() => {
                    touchStartIndex.current = i;
                  }}
                >
                  <Curtain
                    title={s.title}
                    location={s.location}
                    backgroundImage={s.bg}
                    backgroundImage2x={s.bg2x}
                    active={i === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curtains;
