// src/components/LandingPage/Curtains/Curtains.tsx

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Curtain from '@/components/Curtain/Curtain';

import styles from './Curtains.module.css';

const slides = [
  {
    id: 'malibu',
    title: 'Malibu Beach',
    location: 'California | USA',
    bg: '/images/malibu-beach.jpg',
  },
  {
    id: 'airlie',
    title: 'Airlie Beach',
    location: 'Queensland | Australia',
    bg: '/images/airlie-beach.jpg',
  },
  {
    id: 'cloud-nine',
    title: 'Cloud Nine',
    location: 'Siargao | Philippines',
    bg: '/images/cloud-nine.jpg',
  },
  {
    id: 'vieux-boucau',
    title: 'Vieux Boucau',
    location: 'Hossegor | France',
    bg: '/images/vieux-boucau.jpg',
  },
];

const Curtains: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.curtainsSection}>
      <div className={styles.swiperWrap}>
        <Swiper
          navigation
          slidesPerView={'auto'}
          centeredSlides
          spaceBetween={-160}
          onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
          className={styles.swiper}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={s.id} className={styles.slide}>
              <Curtain
                title={s.title}
                location={s.location}
                backgroundImage={s.bg}
                backgroundImage2x={s.bg2x}
                active={i === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Curtains;
