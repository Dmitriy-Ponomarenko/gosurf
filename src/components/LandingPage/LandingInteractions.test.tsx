import '@testing-library/jest-dom/vitest';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import BuySurfBoardSection from './BuySurfBoardSection/BuySurfBoardSection';
import Curtains from './Curtains/Curtains';
import LocationSection from './LocationSection/LocationSection';
import ResortsSection from './ResortsSection/ResortsSection';
import TravelSection from './TravelSection/TravelSection';

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('landing interactions', () => {
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
    expect(parseFloat(malibu.style.left)).toBeCloseTo(17, 0);
    expect(parseFloat(malibu.style.top)).toBeCloseTo(35, 0);
    expect(parseFloat(airlie.style.left)).toBeCloseTo(91, 0);
    expect(parseFloat(airlie.style.top)).toBeCloseTo(73, 0);
    fireEvent.click(malibu);
    expect(malibu).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('California, USA')).toBeInTheDocument();
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
  });
});
