// src/components/LandingPage/HeroSection/HeroSection.tsx

import React, { useState } from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Импорт стилей swiper (обязательно для работы)
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import Header from '../Header/Header';

import styles from './HeroSection.module.css';

type Resort = {
  id: string;
  title: string;
  location: string;
  condition: string;
  description: string;
  date: string;
  region: string;
  backgroundImage: string;
  backgroundImage2x: string;
  mapDestination: { label: string; x: number; y: number };
};

const routeStart = { label: 'Route start', x: 76, y: 16 };
const roadStops = [
  { x: 175, y: 108 },
  { x: 280, y: 150 },
  { x: 340, y: 248 },
  { x: 455, y: 276 },
  { x: 560, y: 304 },
  { x: 645, y: 340 },
  { x: 850, y: 455 },
];

const getRoutePath = (destination: { x: number; y: number }) => {
  const startX = routeStart.x * 10.01;
  const startY = routeStart.y * 4.96;
  const endX = destination.x * 10.01;
  const endY = destination.y * 4.96;

  return `M ${startX} ${startY} C 790 105, 870 120, 820 165 C 780 200, 770 215, 800 240 C 830 265, 845 285, 790 300 C 735 315, 700 300, 660 300 C 610 300, ${endX + 80} ${endY - 40}, ${endX} ${endY}`;
};

const resorts: Resort[] = [
  {
    id: 'north-shore',
    title: 'North Shore',
    location: 'Oahu, Hawaii',
    condition: 'Radical',
    description:
      'Classic big-wave surf destination with towering curls, iconic reef breaks, and a strong island vibe.',
    date: '20 | 06 | 2018',
    region: 'North Shore',
    backgroundImage: '/images/north-shore.jpg',
    backgroundImage2x: '/images/north-shore@2x.jpg',
    mapDestination: {
      label: 'North Shore - Oahu, HI',
      x: 560 / 10.01,
      y: 304 / 4.96,
    },
  },
  {
    id: 'south-shore',
    title: 'South Shore',
    location: 'Maui, Hawaii',
    condition: 'Cruising',
    description:
      'Warm water, long rides, and easy takeoffs make this resort perfect for all-level surfers and travelers.',
    date: '14 | 08 | 2019',
    region: 'South Shore',
    backgroundImage: '/images/south-shore.jpg',
    backgroundImage2x: '/images/south-shore@2x.jpg',
    mapDestination: { label: 'South Shore - Maui, HI', x: 34, y: 50 },
  },
  {
    id: 'east-shore',
    title: 'East Shore',
    location: 'Bali, Indonesia',
    condition: 'Smooth',
    description:
      'A tropical getaway with mellow reefs, palm-fringed beaches, and sunset sessions over warm sand.',
    date: '02 | 11 | 2020',
    region: 'East Shore',
    backgroundImage: '/images/east-shore.jpg',
    backgroundImage2x: '/images/east-shore@2x.jpg',
    mapDestination: {
      label: 'East Shore - Bali, ID',
      x: 645 / 10.01,
      y: 340 / 4.96,
    },
  },
  {
    id: 'west-shore',
    title: 'West Shore',
    location: 'California, USA',
    condition: 'Powerful',
    description:
      'Foggy mornings, dramatic cliffs, and powerful sets give this resort a dramatic coast-to-coast feel.',
    date: '11 | 09 | 2021',
    region: 'West Shore',
    backgroundImage: '/images/west-shore.jpg',
    backgroundImage2x: '/images/west-shore@2x.jpg',
    mapDestination: {
      label: 'West Shore - Malibu, CA',
      x: 455 / 10.01,
      y: 276 / 4.96,
    },
  },
];

const HeroSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleNavClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const handleScrollToLocations = () => {
    document.getElementById('surf-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const activeResort = resorts[activeIndex] as Resort;

  return (
    <section id="top" className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? false
            : {
                delay: 6500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className={styles.swiperContainer}
      >
        {resorts.map(resort => (
          <SwiperSlide key={resort.id}>
            <div
              className={styles.slideBg}
              style={
                {
                  '--image': `url("${resort.backgroundImage}")`,
                  '--image-2x': `url("${resort.backgroundImage2x}")`,
                } as React.CSSProperties
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.heroContainer} container`}>
        <Header location={activeResort.location} date={activeResort.date} />

        <div className={styles.contentOverlay}>
          <div className={styles.rightTop}>
            <div className={styles.mapContainer}>
              <svg
                className={styles.heroMap}
                viewBox="0 0 1001 496"
                aria-hidden="true"
              >
                <path
                  d="M75 0 C120 55 95 78 175 108 S220 155 280 150 C290 220 270 255 340 248 S400 285 455 276 S510 310 560 304 S600 345 645 340 S710 390 725 430 S800 470 850 455 S945 445 1001 425"
                  fill="none"
                  stroke="white"
                  strokeOpacity=".35"
                  strokeWidth="2"
                />
                {roadStops.map(stop => (
                  <circle
                    key={`${stop.x}-${stop.y}`}
                    className={styles.roadStop}
                    cx={stop.x}
                    cy={stop.y}
                    r="3.5"
                  />
                ))}
                <path
                  d={getRoutePath(activeResort.mapDestination)}
                  fill="none"
                  stroke="#dedede"
                  strokeOpacity=".85"
                  strokeWidth="2"
                />
              </svg>
              {[routeStart, activeResort.mapDestination].map(point => (
                <div
                  key={point.label}
                  className={styles.mapPoint}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.mapControls}>
              <div className={styles.heroArrows}>
                <button
                  type="button"
                  aria-label="Previous shore"
                  onClick={() =>
                    handleNavClick(
                      (activeIndex + resorts.length - 1) % resorts.length
                    )
                  }
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next shore"
                  onClick={() =>
                    handleNavClick((activeIndex + 1) % resorts.length)
                  }
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className={styles.rightBottom}>
            <div className={styles.rightContent}>
              <span className={styles.eyebrow}>Surf</span>
              <h2 className={styles.regionTitle}>{activeResort.region}</h2>

              <div className={styles.conditionBox}>
                <span>Condition</span>
                <p className={styles.conditionValue}>
                  {activeResort.condition}
                </p>
              </div>

              <div className={styles.navigationPanel}>
                <div className={styles.navContainer}>
                  <div className={styles.navWrapper}>
                    {resorts.map((resort, index) => (
                      <button
                        key={resort.id}
                        type="button"
                        aria-label={`Show ${resort.title}`}
                        aria-current={
                          activeIndex === index ? 'true' : undefined
                        }
                        className={`${styles.navItem} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => handleNavClick(index)}
                      >
                        <span className={styles.navIndex}>0{index + 1}</span>
                        <span className={styles.navLabel}>{resort.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.scrollCue}
                  aria-label="Explore surf destinations"
                  onClick={handleScrollToLocations}
                >
                  <FiChevronsDown aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
