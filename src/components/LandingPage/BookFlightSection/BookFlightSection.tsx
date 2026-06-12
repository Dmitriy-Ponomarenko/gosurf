// src/components/LandingPage/BookFlightSection/BookFlightSection.tsx

import React, { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Button from '@/components/Button/Button';

import ItemCard from '../ItemCard/ItemCard';

import styles from './BookFlightSection.module.css';

type Flight = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ratingText: string;
  stars: number;
  destination: string;
  distance: string;
  travelTime: string;
  basePrice: number;
};

const flights: Flight[] = [
  {
    id: 1,
    title: 'Virgin Australia',
    subtitle: 'Flight to Airlie Beach',
    description:
      'Direct flight to tropical Airlie Beach - gateway to the Great Barrier Reef.',
    ratingText: 'Excellent',
    stars: 5,
    destination: 'Airlie Beach, Australia',
    distance: '7,065 miles',
    travelTime: '23 hours 5 minutes',
    basePrice: 1976,
  },
  {
    id: 2,
    title: 'Qantas Airways',
    subtitle: 'Flight to Sydney',
    description:
      'Comfortable journey to Sydney with world-class service and amenities.',
    ratingText: 'Excellent',
    stars: 5,
    destination: 'Sydney, Australia',
    distance: '8,995 miles',
    travelTime: '28 hours 15 minutes',
    basePrice: 1650,
  },
  {
    id: 3,
    title: 'Air New Zealand',
    subtitle: 'Flight to Auckland',
    description:
      "Premium experience to New Zealand's gateway city with stunning views.",
    ratingText: 'Excellent',
    stars: 5,
    destination: 'Auckland, New Zealand',
    distance: '8,640 miles',
    travelTime: '26 hours 30 minutes',
    basePrice: 1480,
  },
  {
    id: 4,
    title: 'Hawaiian Airlines',
    subtitle: 'Flight to Honolulu',
    description:
      'Tropical paradise awaits in Hawaii with over-ocean island adventures.',
    ratingText: 'Excellent',
    stars: 4,
    destination: 'Honolulu, Hawaii',
    distance: '4,890 miles',
    travelTime: '14 hours 20 minutes',
    basePrice: 1245,
  },
];

const BookFlightSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const flight = flights[activeIndex];

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
    <section className={styles.bookFlightSection}>
      <div className={styles.bookFlightContainer}>
        <div className={styles.bookFlightHeader}>
          <p className={styles.bookFlightLabel}>Airline</p>
          <h2 className={styles.bookFlightTitle}>Book a Flight</h2>
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
            {flights.map(item => (
              <SwiperSlide key={item.id} className={styles.slidesContainer}>
                <h3>{item.title}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.navigationButtons}>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Previous flight"
            onClick={handlePrevious}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Next flight"
            onClick={handleNext}
          >
            →
          </button>
        </div>

        <div className={styles.contentWrapper}>
          {flight && (
            <ItemCard
              subtitle={flight.subtitle}
              description={flight.description}
              ratingText={flight.ratingText}
              stars={flight.stars}
              basePrice={flight.basePrice}
              destination={flight.destination}
              distance={flight.distance}
              travelTime={flight.travelTime}
              showQuantityControls={false}
            />
          )}
          <div className={styles.imageWrapper}>
            <img
              src="https://via.placeholder.com/400x500?text=Flight+Image"
              alt={flight?.title}
            />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button secondary="FLIGHT →">BOOK -</Button>
        </div>
      </div>
    </section>
  );
};

export default BookFlightSection;
