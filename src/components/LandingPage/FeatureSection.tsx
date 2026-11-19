import { useState } from 'react';

import styles from './FeatureSection.module.css';
import { SectionHeading, SectionLabel, SliderArrows } from './SectionParts';

export type Feature = {
  title: string;
  image: string;
  detail: string;
  detailLabel?: string;
  facts: { label: string; value: string }[];
  showPlane?: boolean;
};

type Props = {
  heading: string;
  label: string;
  detailLabel: string;
  slides: [Feature, ...Feature[]];
  stay?: boolean;
};

export default function FeatureSection({
  heading,
  label,
  detailLabel,
  slides,
  stay = false,
}: Props) {
  const [index, setIndex] = useState(0);
  const [nights, setNights] = useState(5);
  const [guests, setGuests] = useState(4);
  const slide = slides[index] ?? slides[0];

  return (
    <section className={styles.section}>
      <SectionHeading title={heading} />
      <div
        key={slide.title}
        className={styles.visual}
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 30%, #141616 100%), linear-gradient(0deg, #141616 0%, transparent 65%), url("${slide.image}")`,
        }}
      />
      <div className={styles.container}>
        <div className={styles.intro}>
          <SectionLabel>{label}</SectionLabel>
          <h3>{slide.title}</h3>
          <SliderArrows
            label={heading.toLowerCase()}
            onPrevious={() =>
              setIndex((index + slides.length - 1) % slides.length)
            }
            onNext={() => setIndex((index + 1) % slides.length)}
          />
        </div>
        <div className={styles.detail}>
          <SectionLabel>{slide.detailLabel ?? detailLabel}</SectionLabel>
          <h3>
            {slide.detail}{' '}
            {stay && (
              <span className={styles.stars} aria-label="5 out of 5 stars">
                ★★★★★
              </span>
            )}
          </h3>
        </div>
        {slide.showPlane === true && (
          <img className={styles.plane} src="/images/plane.png" alt="" />
        )}
        <div className={styles.facts}>
          {slide.facts.map(fact => (
            <div className={styles.fact} key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
          {stay && (
            <>
              <div className={styles.fact}>
                <span># of nights</span>
                <strong>
                  {nights} {nights === 1 ? 'night' : 'nights'}
                </strong>
                <div className={styles.counter}>
                  <button
                    type="button"
                    aria-label="Remove night"
                    disabled={nights <= 1}
                    onClick={() => setNights(nights - 1)}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    aria-label="Add night"
                    onClick={() => setNights(nights + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={styles.fact}>
                <span># of guests</span>
                <strong>
                  {guests} {guests === 1 ? 'guest' : 'guests'}
                </strong>
                <div className={styles.counter}>
                  <button
                    type="button"
                    aria-label="Remove guest"
                    disabled={guests <= 1}
                    onClick={() => setGuests(guests - 1)}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    aria-label="Add guest"
                    onClick={() => setGuests(guests + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <p className={styles.note}>
          Destinations and prices are illustrative. Booking is not available
          yet.
        </p>
      </div>
    </section>
  );
}
