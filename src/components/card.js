import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';

export default function Card({
  imageWidth = 1280,
  imageHeight = 600,
  imageSrc,
  imageAlt,
  children,
  spacing = true,
  backdrop = true,
  className,
}) {
  return (
    <section className={`${styles.card} ${spacing ? 'spacing' : ''} ${className} `}>
      <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
      <div
        className={`${backdrop ? styles.backdrop : ''} ${
          children ? styles.content : ''
        } `}
      >
        {children}
      </div>
    </section>
  );
}
