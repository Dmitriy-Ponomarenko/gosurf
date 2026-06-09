// src/pages/LandingPage/LandingPage.tsx

import Footer from '@/components/Footer/Footer';
import BookFlightSection from '@/components/LandingPage/BookFlightSection/BookFlightSection';
import BuySurfBoardSection from '@/components/LandingPage/BuySurfBoardSection/BuySurfBoardSection';
import Curtains from '@/components/LandingPage/Curtains/Curtains';
import HeroSection from '@/components/LandingPage/HeroSection/HeroSection';
import LocationSection from '@/components/LandingPage/LocationSection/LocationSection';
import ResortsSection from '@/components/LandingPage/ResortsSection/ResortsSection';
import TravelSection from '@/components/LandingPage/TravelSection/TravelSection';

import styles from './LandingPage.module.css';
import '../../index.css';

const LandingPage = () => {
  return (
    <section className={`${styles.homeSection}`}>
      <div className={`${styles.homeContainer}`}>
        {/* <HeroSection /> */}
        <LocationSection />
        <Curtains />
        <section id="travel-section">
          <TravelSection />
        </section>
        <BookFlightSection />
        <section id="resorts-section">
          <ResortsSection />
        </section>
        <section id="surfboard-section">
          <BuySurfBoardSection />
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default LandingPage;
