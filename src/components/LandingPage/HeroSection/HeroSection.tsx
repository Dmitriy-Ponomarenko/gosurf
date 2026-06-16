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
      <header className={styles.heroHeader}>{/* <Sidebar /> */}</header>
    </section>
  );
};

export default HeroSection;
