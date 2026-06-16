// src/components/LandingPage/HeroSection/HeroSection.tsx

import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Импорт стилей swiper (обязательно для работы)
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

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
  mapPoints: Array<{ label: string; x: number; y: number }>;
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
    region: 'West Shore',
    backgroundImage: '/images/north-shore.jpg',
    mapPoints: [
      { label: 'Current Location', x: 80, y: 20 },
      { label: 'West Shore - Oahu, HI', x: 50, y: 60 },
    ],
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
    mapPoints: [
      { label: 'Current Location', x: 75, y: 25 },
      { label: 'South Shore - Maui, HI', x: 40, y: 65 },
    ],
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
    mapPoints: [
      { label: 'Current Location', x: 70, y: 30 },
      { label: 'East Shore - Bali, ID', x: 45, y: 70 },
    ],
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
    mapPoints: [
      { label: 'Current Location', x: 85, y: 15 },
      { label: 'West Shore - Malibu, CA', x: 55, y: 55 },
    ],
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

  const activeResort = resorts[activeIndex] as Resort;

  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[EffectFade, Navigation]}
        effect="fade"
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className={styles.swiperContainer}
      >
        {resorts.map(resort => (
          <SwiperSlide key={resort.id}>
            <div
              className={styles.slideBg}
              style={{ backgroundImage: `url(${resort.backgroundImage})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Контент поверх свайпера */}
      <div className={styles.contentOverlay}>
        <div className="container">
          <h2 className={styles.regionTitle}>{activeResort.region}</h2>
          <div className={styles.conditionBox}>
            <span>Condition</span>
            <p className={styles.conditionValue}>{activeResort.condition}</p>
          </div>
        </div>

        {/* Нижняя навигация */}
        <div className={styles.navigationPanel}>
          <div className="container">
            <div className={styles.navWrapper}>
              {resorts.map((resort, index) => (
                <button
                  key={resort.id}
                  className={`${styles.navItem} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => handleNavClick(index)}
                >
                  <span className={styles.navIndex}>0{index + 1}</span>
                  <span className={styles.navLabel}>{resort.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
