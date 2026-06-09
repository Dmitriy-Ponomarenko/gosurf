// src/components/LandingPage/BookFlightSection/BookFlightSection.tsx

import React from 'react';

import Button from '@/components/Button/Button';

const BookFlightSection: React.FC = () => {
  return (
    <section>
      <h2>Book a flight</h2>
      <Button secondary="FLIGHT →">BOOK -</Button>
    </section>
  );
};

export default BookFlightSection;
