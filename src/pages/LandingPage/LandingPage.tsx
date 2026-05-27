// src/pages/LandingPage/LandingPage.jsx

import React from 'react';
import styles from './LandingPage.module.css';
import '../../index.css';
import { Header } from '../../components/LandingPage/Header/Sidebar.js';
import { HeroSection } from '../../components/LandingPageComp/HeroSection/HeroSection';
import { LocationSection } from '../../components/LandingPageComp/AboutSection/AboutSection';
import { Curtains } from '../../components/LandingPageComp/FeaturesSection/FeaturesSection';
import { TravelSection } from '../../components/LandingPageComp/SRSection/SRSection.jsx';
import { BookFlightSection } from '../../components/LandingPageComp/CommentSection/CommentSection';
import { ResortsSection } from '../../components/LandingPageComp/NewsletterSection/NewsletterSection';
import { BuySurfBoardSection } from '../../components/LandingPageComp/NewsletterSection/NewsletterSection';
import { Footer } from '../../components/Footer/Footer';

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
