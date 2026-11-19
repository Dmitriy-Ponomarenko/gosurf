import styles from './Header.module.css';

type IconName = 'surf' | 'travel' | 'sleep' | 'shop';

export default function NavigationIcon({ name }: { name: IconName }) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 56 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'surf' && (
        <>
          <path d="M27 33c-1-8-1-23 4-30 5 7 5 22 4 30M31 4v29M22 37c3-4 5-4 8 0 3-4 6-4 9 0 3-4 6-4 9 0M6 38c2-3 5-4 8-2 2 1 4 1 6-1M4 42c3-4 6-4 9-1 3-3 6-3 9 0 3-3 6-3 9 0 3-3 6-3 9 0 3-3 6-3 9 0M8 32l2-3m3 2 1-3" />
        </>
      )}
      {name === 'travel' && (
        <>
          <path d="M5 32v-9l5-8h29l8 7 3 2v8h-4M7 32h5m8 0h15M10 15l4-5h23l4 5M16 15v-4m-9-3h30c3 0 5-1 6-3H11C8 5 6 6 6 7zM14 18h8v7H11zm11 0h9v7h-9zm12 0h3l5 7h-8zM7 28h3m35 0h4" />
          <circle cx="16" cy="33" r="4" />
          <circle cx="40" cy="33" r="4" />
          <circle cx="16" cy="33" r="1.5" />
          <circle cx="40" cy="33" r="1.5" />
        </>
      )}
      {name === 'sleep' && (
        <>
          <path d="M6 39 27 9l21 30M13 39 28 17l15 22M20 39l8-12 8 12M4 39h48M27 9l-3-5m3 5 3-5M8 34h5m30 0h5M7 43h13m16 0h13M6 10c0 3 2 5 5 5 1 0 2 0 3-1-4 0-6-3-5-7-2 0-3 1-3 3z" />
          <path d="M28 31c-2 3-3 4-3 5a3 3 0 0 0 6 0c0-1-1-2-3-5z" />
        </>
      )}
      {name === 'shop' && (
        <>
          <path d="M28 3c-6 2-9 10-9 18 0 10 4 18 9 24 5-6 9-14 9-24 0-8-3-16-9-18zM28 4v40M20 20c5 0 11 3 16 7M21 27c4 0 9 3 13 6" />
        </>
      )}
    </svg>
  );
}
