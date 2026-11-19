import React, { useState } from 'react';

import Button from '@/components/Button/Button';

import styles from './DevIcons.module.css';

const imageFiles = [
  'airlie-beach.jpg',
  'cloud-nine.jpg',
  'east-shore.jpg',
  'malibu-beach.jpg',
  'north-shore.jpg',
  'south-shore.jpg',
  'vieux-boucau.jpg',
  'west-shore.jpg',
  'plane.png',
  'virgin-australia.png',
];

const spriteIcons = ['sleep', 'surf', 'travel', 'shop'];

const colorTokens = [
  { name: '--bg-color', value: '#171919' },
  { name: '--panel-color', value: '#0f1010' },
  { name: '--green', value: '#4af6cd' },
  { name: '--text-main', value: '#ffffff' },
  { name: '--text-muted', value: '#979797' },
  { name: '--text-secondary', value: '#d9d9d9' },
  { name: '--border-color', value: '#2a2d2e' },
  { name: '--radius', value: '16px' },
];

const fontSamples = [
  { label: 'Heading 1', size: '4rem', element: 'h1' },
  { label: 'Heading 2', size: '3rem', element: 'h2' },
  { label: 'Body text', size: '1rem', element: 'p' },
  { label: 'Caption', size: '0.875rem', element: 'small' },
];

type PreviewItem =
  | { kind: 'image'; src: string; label: string }
  | { kind: 'sprite'; id: string; label: string }
  | { kind: 'logo'; id: string; label: string }
  | { kind: 'svg-file'; href: string; label: string };

const DevIcons: React.FC = () => {
  const [preview, setPreview] = useState<PreviewItem | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openPreview = (item: PreviewItem) => {
    setPreview(item);
    setIsClosing(false);
  };

  const closePreview = () => {
    setIsClosing(true);
  };

  const handleOverlayAnimationEnd = () => {
    if (isClosing) {
      setPreview(null);
      setIsClosing(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Developer preview</h1>
        <p>
          A single place for design tokens, fonts, icons, images and button
          variants. Click any asset to preview it at full size without leaving
          the page.
        </p>
        <p>
          Want to preview UI components instead? Visit{' '}
          <a className={styles.devLink} href="/dev-components">
            /dev-components
          </a>
          .
        </p>
      </section>

      <section className={styles.gridSection}>
        <h2>Design tokens</h2>
        <div className={styles.tokenGrid}>
          {colorTokens.map(token => (
            <div key={token.name} className={styles.tokenCard}>
              <div
                className={styles.tokenSwatch}
                style={{ backgroundColor: token.value }}
              />
              <div>
                <strong>{token.name}</strong>
                <p>{token.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2>Typography samples</h2>
        <div className={styles.fontGrid}>
          <div className={styles.fontCard}>
            <p className={styles.fontMeta}>
              Font family: <code>Fira Sans, sans-serif</code>
            </p>
            <p className={styles.fontMeta}>
              Base size: <code>1rem</code> (16px)
            </p>
          </div>
          {fontSamples.map(sample => (
            <div key={sample.label} className={styles.fontCard}>
              <div
                className={styles.fontExample}
                style={{ fontSize: sample.size }}
              >
                {sample.label}
              </div>
              <p className={styles.fontMeta}>{sample.size}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2>Image gallery</h2>
        <div className={styles.imageGrid}>
          {imageFiles.map(file => (
            <figure
              key={file}
              className={styles.imageCard}
              onClick={() =>
                openPreview({
                  kind: 'image',
                  src: `/images/${file}`,
                  label: file,
                })
              }
            >
              <img src={`/images/${file}`} alt={file.replace(/[-.]/g, ' ')} />
              <figcaption>{file}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2>SVG sprite icons</h2>
        <div className={styles.iconGrid}>
          {spriteIcons.map(id => (
            <button
              key={id}
              className={styles.iconCard}
              type="button"
              onClick={() => openPreview({ kind: 'sprite', id, label: id })}
            >
              <svg className={styles.icon} aria-hidden="true">
                <use href={`#${id}`} />
              </svg>
              <span>{id}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2>External logo preview</h2>
        <div className={styles.iconGrid}>
          <button
            className={styles.iconCard}
            type="button"
            onClick={() =>
              openPreview({
                kind: 'logo',
                id: 'virgin-logo',
                label: 'virgin-logo',
              })
            }
          >
            <svg className={styles.icon} aria-hidden="true">
              <use href="/icons.svg#virgin-logo" />
            </svg>
            <span>virgin-logo</span>
          </button>
          <button
            className={styles.iconCard}
            type="button"
            onClick={() =>
              openPreview({
                kind: 'svg-file',
                href: '/icons.svg',
                label: 'icons.svg file',
              })
            }
          >
            <object
              className={styles.externalSvg}
              type="image/svg+xml"
              data="/icons.svg"
              aria-label="icons.svg file preview"
            />
            <span>icons.svg file</span>
          </button>
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2>Button variants</h2>
        <div className={styles.buttonGrid}>
          <Button>Default</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button secondary="FLIGHT →">BOOK -</Button>
          <Button variant="primary" secondary="GO →">
            START
          </Button>
        </div>
      </section>

      {preview ? (
        <div
          className={`${styles.modalOverlay} ${isClosing ? styles.closing : styles.opening}`}
          onClick={closePreview}
          onAnimationEnd={handleOverlayAnimationEnd}
        >
          <div
            className={styles.modal}
            onClick={event => event.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              type="button"
              onClick={closePreview}
            >
              ×
            </button>
            <div className={styles.previewContent}>
              {preview.kind === 'image' && (
                <img
                  src={preview.src}
                  alt={preview.label}
                  className={styles.previewImage}
                />
              )}
              {preview.kind === 'sprite' && (
                <svg className={styles.previewSvg} aria-hidden="true">
                  <use href={`#${preview.id}`} />
                </svg>
              )}
              {preview.kind === 'logo' && (
                <svg className={styles.previewSvg} aria-hidden="true">
                  <use href="/icons.svg#virgin-logo" />
                </svg>
              )}
              {preview.kind === 'svg-file' && (
                <object
                  className={styles.previewSvg}
                  type="image/svg+xml"
                  data={preview.href}
                  aria-label="icons.svg full preview"
                />
              )}
            </div>
            <p className={styles.previewLabel}>{preview.label}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default DevIcons;
