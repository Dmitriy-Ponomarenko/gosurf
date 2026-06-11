// src/components/LandingPage/ResortsSection/ResortsSection.tsx

import React, { useMemo, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

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
  const [nights, setNights] = useState(5);
  const [guests, setGuests] = useState(4);
  const swiperRef = useRef<SwiperType | null>(null);

  const resort = resorts[activeIndex] ?? initialResort;

  const price = useMemo(
    () => resort.basePrice * nights * guests,
    [resort.basePrice, nights, guests]
  );

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setNights(5);
    setGuests(4);
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
    <section aria-labelledby="resorts-heading">
      <div>
        <p id="resorts-heading">Resort</p>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
        >
          {resorts.map(item => (
            <SwiperSlide key={item.id}>
              <h2>{item.title}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <button
            type="button"
            aria-label="Previous resort"
            onClick={handlePrevious}
          >
            ←
          </button>
          <button type="button" aria-label="Next resort" onClick={handleNext}>
            →
          </button>
        </div>

        <div>
          <p>{resort.ratingText}</p>
          <div>{'★'.repeat(resort.stars)}</div>
        </div>

        <div>
          <p>{resort.subtitle}</p>
          <p>{resort.description}</p>
        </div>

        <div>
          <h4># of Nights</h4>
          <button
            type="button"
            onClick={() => setNights(n => Math.max(1, n - 1))}
          >
            -
          </button>
          <span>{nights} Nights</span>
          <button type="button" onClick={() => setNights(n => n + 1)}>
            +
          </button>
        </div>

        <div>
          <h4># of Guests</h4>
          <button
            type="button"
            onClick={() => setGuests(g => Math.max(1, g - 1))}
          >
            -
          </button>
          <span>{guests} Guests</span>
          <button type="button" onClick={() => setGuests(g => g + 1)}>
            +
          </button>
        </div>

        <div>
          <h4>Pricing</h4>
          <p>${price.toLocaleString()} USD</p>
        </div>
      </div>
    </section>
  );
};

export default ResortsSection;
