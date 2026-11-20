import FeatureSection from '../FeatureSection';
import type { Feature } from '../FeatureSection';

const slides: [Feature, ...Feature[]] = [
  {
    title: 'Airlie Beach | Australia',
    image: '/images/virgin-australia.png',
    image2x: '/images/virgin-australia@2x.png',
    detail: 'Virgin Australia',
    detailLabel: 'Airline',
    showPlane: true,
    facts: [
      { label: 'Destination', value: 'Queensland Australia' },
      { label: 'Distance', value: '7,065 miles' },
      { label: 'Travel time', value: '23 hours 5 minutes' },
      { label: 'Pricing', value: '$1,976 USD' },
    ],
  },
  {
    title: 'Malibu Beach | USA',
    image: '/images/malibu-beach.jpg',
    image2x: '/images/malibu-beach@2x.jpg',
    detail: 'California coast',
    facts: [
      { label: 'Destination', value: 'California USA' },
      { label: 'Experience', value: 'Coastal escape' },
      { label: 'Surf', value: 'All levels' },
      { label: 'Season', value: 'Year round' },
    ],
  },
  {
    title: 'Cloud Nine | Philippines',
    image: '/images/cloud-nine.jpg',
    image2x: '/images/cloud-nine@2x.jpg',
    detail: 'Siargao island',
    facts: [
      { label: 'Destination', value: 'Siargao Philippines' },
      { label: 'Experience', value: 'Island escape' },
      { label: 'Surf', value: 'Reef breaks' },
      { label: 'Season', value: 'September - November' },
    ],
  },
];

export default function TravelSection() {
  return (
    <FeatureSection
      heading="Travel"
      label="Shore"
      detailLabel="Destination"
      slides={slides}
    />
  );
}
