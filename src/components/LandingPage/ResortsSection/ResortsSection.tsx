import FeatureSection from '../FeatureSection';
import type { Feature } from '../FeatureSection';

const slides: [Feature, ...Feature[]] = [
  {
    title: 'Auberge | Australia',
    image: '/images/evening-restaurant.png',
    image2x: '/images/evening-restaurant@2x.png',
    detail: 'Excellent',
    facts: [
      { label: 'Resort', value: 'Auberge Australia' },
      { label: 'Pricing', value: '$349 USD / night' },
    ],
  },
  {
    title: 'Island stay | Philippines',
    image: '/images/cloud-nine.jpg',
    image2x: '/images/cloud-nine@2x.jpg',
    detail: 'Excellent',
    facts: [
      { label: 'Resort', value: 'Siargao Philippines' },
      { label: 'Pricing', value: '$199 USD / night' },
    ],
  },
  {
    title: 'Coastal stay | France',
    image: '/images/vieux-boucau.jpg',
    image2x: '/images/vieux-boucau@2x.jpg',
    detail: 'Excellent',
    facts: [
      { label: 'Resort', value: 'Hossegor France' },
      { label: 'Pricing', value: '$289 USD / night' },
    ],
  },
];

export default function ResortsSection() {
  return (
    <FeatureSection
      heading="Sleep"
      label="Resorts"
      detailLabel="Rating"
      slides={slides}
      stay
    />
  );
}
