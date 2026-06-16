// src/components/LandingPage/ResortsSection/ResortsSection.tsx

import React, { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import Button from '@/components/Button/Button';

import ItemCard from '../ItemCard/ItemCard';

import styles from './ResortsSection.module.css';
import '../../../index.css';

type Resort = {
  id: number;
  title: string;
  subtitle: string;
  ratingText: string;
  stars: number;
  description: string;
  basePrice: number;
};

const resorts: Resort[] = [
  {
    id: 1,
    title: 'Auberge | Australia',
    subtitle: 'Resort Auberge Australia',
    ratingText: 'Excellent',
    stars: 5,
    description: 'Cliffside luxury resort with ocean views.',
    basePrice: 349,
  },
  {
    id: 2,
    title: 'Kyoto | Japan',
    subtitle: 'Resort Kyoto Japan',
    ratingText: 'Excellent',
    stars: 5,
    description: 'Traditional ryokan experience in Kyoto.',
    basePrice: 289,
  },
  {
    id: 3,
    title: 'Bali | Indonesia',
    subtitle: 'Resort Bali Indonesia',
    ratingText: 'Excellent',
    stars: 5,
    description: 'Tropical villas surrounded by jungle.',
    basePrice: 199,
  },
  {
    id: 4,
    title: 'Santorini | Greece',
    subtitle: 'Resort Santorini Greece',
    ratingText: 'Excellent',
    stars: 5,
    description: 'White cliffside suites with sunset views.',
    basePrice: 420,
  },
];

const initialResort: Resort = resorts[0] ?? {
  id: 0,
  title: 'Unknown Resort',
  subtitle: 'Resort information unavailable',
  ratingText: 'Unknown',
  stars: 0,
  description: 'Details are currently unavailable.',
  basePrice: 0,
};

const ResortsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const resort = resorts[activeIndex] ?? initialResort;

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section
      className={`${styles.resortsSection} section`}
      aria-labelledby="resorts-heading"
    >
      <div className={`${styles.resortsContainer} container`}>
        <div className={styles.resortsHeader}>
          <p className={styles.resortsLabel} id="resorts-heading">
            Resort
          </p>
        </div>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            className={styles.swiper}
          >
            {resorts.map(item => (
              <SwiperSlide key={item.id} className={styles.slidesContainer}>
                <h2>{item.title}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.navigationButtons}>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Previous resort"
            onClick={handlePrevious}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Next resort"
            onClick={handleNext}
          >
            →
          </button>
        </div>

        <div className={styles.contentWrapper}>
          <ItemCard
            subtitle={resort.subtitle}
            description={resort.description}
            ratingText={resort.ratingText}
            stars={resort.stars}
            basePrice={resort.basePrice}
            showQuantityControls={true}
          />
          <div className={styles.imageWrapper}>
            <img
              src="https://via.placeholder.com/400x500?text=Resort+Image"
              alt={resort.title}
            />
          </div>
        </div>
        <Button variant="arrows" leftText="Book" rightText="Stay" />
      </div>
    </section>
  );
};

export default ResortsSection;
