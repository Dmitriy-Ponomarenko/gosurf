import styles from './SectionParts.module.css';

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className={styles.heading}>
      <span aria-hidden="true">{title}</span>
      <h2>{title}</h2>
    </div>
  );
}

export function SliderArrows({
  label,
  onPrevious,
  onNext,
}: {
  label: string;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className={styles.arrows}>
      <button
        type="button"
        aria-label={`Previous ${label}`}
        onClick={onPrevious}
      >
        ←
      </button>
      <button type="button" aria-label={`Next ${label}`} onClick={onNext}>
        →
      </button>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className={styles.label}>{children}</span>;
}
