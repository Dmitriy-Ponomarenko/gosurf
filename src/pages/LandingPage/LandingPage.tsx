// src/pages/LandingPage/LandingPage.tsx

import { Footer } from '@/components/Footer/Footer';
import { BookFlightSection } from '@/components/LandingPage/CommentSection/CommentSection';
import { Curtains } from '@/components/LandingPage/FeaturesSection/FeaturesSection';
import { Header } from '@/components/LandingPage/Header/Sidebar';
import { HeroSection } from '@/components/LandingPage/HeroSection/HeroSection';
import { LocationSection } from '@/components/LandingPage/LocationSection/LocationSection';
import { ResortsSection } from '@/components/LandingPage/NewsletterSection/NewsletterSection';
import { BuySurfBoardSection } from '@/components/LandingPage/NewsletterSection/NewsletterSection';
import { TravelSection } from '@/components/LandingPage/SRSection/SRSection';

import styles from './LandingPage.module.css';
import '../../index.css';

export const LandingPage = () => {
  return (
    <section className={`${styles.homeSection}`}>
      <div className={`${styles.homeContainer}`}>
        <Header />
        <HeroSection />
        <LocationSection />
        <Curtains />
        <TravelSection />
        <BookFlightSection />
        <ResortsSection />
        <BuySurfBoardSection />
        <Footer />
      </div>
    </section>
  );
};
