// src/components/LandingPage/HeroSection/HeroSection.tsx

import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sidebar from '@/components/LandingPage/Sidebar/Sidebar';

import styles from './HeroSection.module.css';

type Resort = {
  id: string;
  title: string;
  location: string;
  condition: string;
  description: string;
  date: string;
  region: string;
};

const resorts: Resort[] = [
  {
    id: 'north-shore',
    title: 'North Shore',
    location: 'Oahu, Hawaii',
    condition: 'Radical',
    description:
      'Classic big-wave surf destination with towering curls, iconic reef breaks, and a strong island vibe.',
    date: '20 06 2018',
    region: 'West Shore',
  },
  {
    id: 'south-shore',
    title: 'South Shore',
    location: 'Maui, Hawaii',
    condition: 'Cruising',
    description:
      'Warm water, long rides, and easy takeoffs make this resort perfect for all-level surfers and travelers.',
    date: '14 08 2019',
    region: 'South Shore',
  },
  {
    id: 'east-shore',
    title: 'East Shore',
    location: 'Bali, Indonesia',
    condition: 'Smooth',
    description:
      'A tropical getaway with mellow reefs, palm-fringed beaches, and sunset sessions over warm sand.',
    date: '02 11 2020',
    region: 'East Shore',
  },
  {
    id: 'west-shore',
    title: 'West Shore',
    location: 'California, USA',
    condition: 'Powerful',
    description:
      'Foggy mornings, dramatic cliffs, and powerful sets give this resort a dramatic coast-to-coast feel.',
    date: '11 09 2021',
    region: 'West Shore',
  },
];

const initialResort = resorts[0] as Resort;

const HeroSection: React.FC = () => {
  const [activeResort, setActiveResort] = useState<Resort>(() => initialResort);

  const mapContent = useMemo(
    () => ({
      title: activeResort.region,
      location: activeResort.location,
      condition: activeResort.condition,
      date: activeResort.date,
    }),
    [activeResort]
  );

  return (
    <section className={styles.heroSection}>
      <header className={styles.heroHeader}>
        <Sidebar />

        <div className={styles.heroIntro}>
          <span className={styles.heroEyebrow}>Go Surf</span>
          <h1 className={styles.heroTitle}>{activeResort.title}</h1>
          <p className={styles.heroSubtitle}>
            {activeResort.description} Choose a resort below to update the map
            view and see an adaptive travel experience for the most interesting
            coastline.
          </p>
        </div>
      </header>

      <div className={styles.heroMap}>
        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <div>
              <p className={styles.mapLabel}>Current Location</p>
              <p className={styles.mapLocation}>{mapContent.location}</p>
            </div>
            <div>
              <p className={styles.mapLabel}>Condition</p>
              <p className={styles.mapLocation}>{mapContent.condition}</p>
            </div>
          </div>
          <div className={styles.mapView}>
            <strong>{mapContent.title}</strong>
            <span>{`Map view updates based on the selected resort. Active resort: ${activeResort.title}.`}</span>
          </div>
        </div>
      </div>

      <div className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <span className={styles.sliderHeaderTitle}>Resort slider</span>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          onSlideChange={swiper => {
            const nextResort = resorts[swiper.activeIndex];
            if (nextResort) {
              setActiveResort(nextResort);
            }
          }}
        >
          {resorts.map(resort => (
            <SwiperSlide key={resort.id}>
              <div className={styles.sliderCard}>
                <h2 className={styles.resortName}>{resort.title}</h2>
                <p className={styles.resortLocation}>{resort.region}</p>
                <p className={styles.resortDescription}>{resort.description}</p>
                <div className={styles.resortMeta}>
                  <div className={styles.resortMetaItem}>
                    <span className={styles.metaLabel}>Travel date</span>
                    <span className={styles.metaValue}>{resort.date}</span>
                  </div>
                  <div className={styles.resortMetaItem}>
                    <span className={styles.metaLabel}>Status</span>
                    <span className={styles.metaValue}>{resort.condition}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
