import '@testing-library/jest-dom/vitest';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import BuySurfBoardSection from './BuySurfBoardSection/BuySurfBoardSection';
import Curtains from './Curtains/Curtains';
import Header from './Header/Header';
import LocationSection from './LocationSection/LocationSection';
import ResortsSection from './ResortsSection/ResortsSection';
import TravelSection from './TravelSection/TravelSection';

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('landing interactions', () => {
  it('shows the slide date without an unrelated local clock', () => {
    render(<Header location="Oahu, Hawaii" date="20 | 06 | 2018" />);
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('06 | 2018')).toHaveAttribute(
      'datetime',
      '2018-06-20'
    );
    expect(screen.queryByLabelText(/your local time/i)).not.toBeInTheDocument();
  });

  it('updates map and board details on hover', () => {
    render(
      <>
        <LocationSection />
        <BuySurfBoardSection />
      </>
    );
    fireEvent.mouseEnter(
      screen.getByRole('button', { name: 'Show Cloud Nine' })
    );
    expect(
      screen.getByRole('button', { name: 'Show Cloud Nine' })
    ).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Philippines')).toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByRole('button', { name: 'Rails' }));
    expect(
      screen.getByText('Shaped rails for smooth turns')
    ).toBeInTheDocument();
  });

  it('places surf spots against the world map using geographic coordinates', () => {
    render(<LocationSection />);
    const malibu = screen.getByRole('button', { name: 'Show Malibu Beach' });
    const airlie = screen.getByRole('button', { name: 'Show Airlie Beach' });
    const card = screen.getByText('Illustrative conditions').parentElement;
    if (!card) throw new Error('Destination card should be rendered');

    expect(parseFloat(malibu.style.left)).toBeCloseTo(17, 0);
    expect(parseFloat(malibu.style.top)).toBeCloseTo(35, 0);
    expect(parseFloat(airlie.style.left)).toBeCloseTo(91, 0);
    expect(parseFloat(airlie.style.top)).toBeCloseTo(73, 0);
    expect(parseFloat(card.style.left)).toBeCloseTo(91, 0);
    expect(parseFloat(card.style.top)).toBeCloseTo(73, 0);

    fireEvent.click(malibu);
    expect(malibu).toHaveAttribute('aria-pressed', 'true');
    expect(parseFloat(card.style.left)).toBeCloseTo(17, 0);
    expect(parseFloat(card.style.top)).toBeCloseTo(35, 0);
    expect(screen.getByText('California, USA')).toBeInTheDocument();
  });

  it('hides the destination card after five idle seconds and keeps it open while hovered', () => {
    vi.useFakeTimers();
    render(<LocationSection />);
    const card = screen.getByText('Illustrative conditions').parentElement;
    const airlie = screen.getByRole('button', { name: 'Show Airlie Beach' });
    if (!card) throw new Error('Destination card should be rendered');

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(card).toHaveAttribute('aria-hidden', 'true');

    fireEvent.mouseEnter(airlie);
    expect(card).toHaveAttribute('aria-hidden', 'false');
    fireEvent.mouseLeave(airlie);
    act(() => {
      vi.advanceTimersByTime(4000);
    });
    fireEvent.mouseEnter(card);
    act(() => {
      vi.advanceTimersByTime(6000);
    });
    expect(card).toHaveAttribute('aria-hidden', 'false');

    fireEvent.mouseLeave(card);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(card).toHaveAttribute('aria-hidden', 'true');
  });

  it('advances curtains automatically and pauses while hovered', () => {
    vi.useFakeTimers();
    vi.stubGlobal('matchMedia', () => ({ matches: false }));
    render(<Curtains />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    const airlie = screen.getByRole('group', { name: 'Airlie Beach' });
    expect(
      within(airlie).getByRole('link', { name: /view surf/i })
    ).toBeInTheDocument();
    fireEvent.mouseEnter(
      screen.getByLabelText('Cloud Nine, Siargao | Philippines')
    );
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(
      within(screen.getByRole('group', { name: 'Cloud Nine' })).getByRole(
        'link',
        { name: /view surf/i }
      )
    ).toBeInTheDocument();
  });

  it('changes travel and resort details and limits guest counts', () => {
    render(
      <>
        <TravelSection />
        <ResortsSection />
      </>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Next travel' }));
    expect(
      screen.getByRole('heading', { name: 'Malibu Beach | USA' })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Previous sleep' }));
    expect(
      screen.getByRole('heading', { name: 'Coastal stay | France' })
    ).toBeInTheDocument();
    const remove = screen.getByRole('button', { name: 'Remove guest' });
    fireEvent.click(remove);
    fireEvent.click(remove);
    fireEvent.click(remove);
    expect(screen.getByText('1 guest')).toBeInTheDocument();
    expect(remove).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Book flight' }));
    expect(
      screen.getByText('Flight booking is coming soon.')
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Book stay' }));
    expect(
      screen.getByText('Stay booking is coming soon.')
    ).toBeInTheDocument();
  });

  it('updates both background image variants when changing destinations', () => {
    const { container } = render(<TravelSection />);
    const getVisual = () =>
      container.querySelector<HTMLElement>('[style*="--image:"]');

    expect(getVisual()?.style.getPropertyValue('--image')).toContain(
      'virgin-australia.png'
    );
    expect(getVisual()?.style.getPropertyValue('--image-2x')).toContain(
      'virgin-australia@2x.png'
    );
    fireEvent.click(screen.getByRole('button', { name: 'Next travel' }));
    expect(getVisual()?.style.getPropertyValue('--image')).toContain(
      'malibu-beach.jpg'
    );
    expect(getVisual()?.style.getPropertyValue('--image-2x')).toContain(
      'malibu-beach@2x.jpg'
    );
  });
});
