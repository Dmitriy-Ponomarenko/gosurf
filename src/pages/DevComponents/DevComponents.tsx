import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Curtain from '@/components/Curtain/Curtain';
import Footer from '@/components/Footer/Footer';
import BookFlightSection from '@/components/LandingPage/BookFlightSection/BookFlightSection';
import BuySurfBoardSection from '@/components/LandingPage/BuySurfBoardSection/BuySurfBoardSection';
import Curtains from '@/components/LandingPage/Curtains/Curtains';
import HeroSection from '@/components/LandingPage/HeroSection/HeroSection';
import LocationSection from '@/components/LandingPage/LocationSection/LocationSection';
import ResortsSection from '@/components/LandingPage/ResortsSection/ResortsSection';
import TravelSection from '@/components/LandingPage/TravelSection/TravelSection';

import styles from './DevComponents.module.css';

type ComponentItem = {
  id: string;
  title: string;
  description: string;
  preview: React.ReactNode;
};

const componentItems: ComponentItem[] = [
  {
    id: 'button',
    title: 'Button / link',
    description:
      'Anchor-style link buttons used to navigate to sections on the live page.',
    preview: (
      <div className={styles.previewWrap}>
        <a href="#book-flight-section" className={styles.anchorButton}>
          <span className={styles.buttonPrefix}>BOOK</span>
          <span className={styles.buttonText}>FLIGHT →</span>
        </a>
        <a href="#stay-section" className={styles.anchorButton}>
          <span className={styles.buttonPrefix}>BOOK</span>
          <span className={styles.buttonText}>STAY →</span>
        </a>
        <a href="#surf-section" className={styles.anchorButton}>
          <span className={styles.buttonPrefix}>GO</span>
          <span className={styles.buttonText}>SURF</span>
        </a>
        <a href="#dropin-section" className={styles.anchorButton}>
          <span className={styles.buttonPrefix}>DROP</span>
          <span className={styles.buttonText}>IN →</span>
        </a>
      </div>
    ),
  },
  {
    id: 'footer',
    title: 'Footer',
    description: 'Footer area with action button and copyright text.',
    preview: <Footer />,
  },
  {
    id: 'hero-section',
    title: 'Hero Section',
    description:
      'Landing page hero section with sidebar and resort navigation.',
    preview: <HeroSection />,
  },
  {
    id: 'sidebar',
    title: 'Sidebar navigation',
    description:
      'Sidebar links for surf, travel, sleep and shop sections, rendered as navigation anchors.',
    preview: (
      <nav className={styles.sideNav}>
        {[
          { id: 'surf', label: 'Surf', sectionId: 'resorts-section' },
          { id: 'travel', label: 'Travel', sectionId: 'travel-section' },
          { id: 'sleep', label: 'Sleep', sectionId: 'resorts-section' },
          { id: 'shop', label: 'Shop', sectionId: 'surfboard-section' },
        ].map(item => (
          <a
            key={item.id}
            href={`#${item.sectionId}`}
            className={styles.sidebarLink}
          >
            <svg className={styles.sidebarIcon} aria-hidden="true">
              <use href={`#${item.id}`} />
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    ),
  },
  {
    id: 'curtains',
    title: 'Curtains',
    description: 'Animated page curtains used for subtle visual depth.',
    preview: <Curtains />,
  },
  {
    id: 'curtain',
    title: 'Curtain',
    description: 'One single curtain for Curtains section',
    preview: (
      <Curtain
        title="Malibu Beach"
        location="California | USA"
        backgroundImage="/images/malibu-beach.jpg"
        backgroundImage2x="/images/malibu-beach@2x.jpg"
      />
    ),
  },
  {
    id: 'book-flight',
    title: 'Book Flight Section',
    description:
      'Flight booking section with search fields and pricing details.',
    preview: <BookFlightSection />,
  },
  {
    id: 'buy-surf-board',
    title: 'Buy Surf Board Section',
    description:
      'Product section with a surfboard showcase and call to action.',
    preview: <BuySurfBoardSection />,
  },
  {
    id: 'travel-section',
    title: 'Travel Section',
    description:
      'Travel highlights section that promotes curated surf excursions.',
    preview: <TravelSection />,
  },
  {
    id: 'location-section',
    title: 'Location Section',
    description: 'Destination map and location details for surf resorts.',
    preview: <LocationSection />,
  },
  {
    id: 'resorts-section',
    title: 'Resorts Section',
    description: 'Resort cards and travel destinations for the landing page.',
    preview: <ResortsSection />,
  },
];

const DevComponents: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ComponentItem>(
    () => componentItems[0] as ComponentItem
  );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <h1>Component library</h1>
          <p>
            Select a component name from the left panel and see the actual
            rendered component on the right. This page shows the live section
            styles and anchor-link buttons used by the site.
          </p>
          <p className={styles.linkRow}>
            <Link to="/dev-icons" className={styles.secondaryLink}>
              View design tokens &amp; icons
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.browserArea}>
        <aside className={styles.sidebar}>
          <h2>Components</h2>
          <ul className={styles.itemList}>
            {componentItems.map(item => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${styles.itemButton} ${item.id === activeItem.id ? styles.activeItem : ''}`}
                  onClick={() => setActiveItem(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className={styles.previewPane}>
          <div className={styles.previewContent}>
            <div className={styles.previewHeader}>
              <h2>{activeItem.title}</h2>
            </div>
            <div className={styles.previewFrame}>{activeItem.preview}</div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default DevComponents;
