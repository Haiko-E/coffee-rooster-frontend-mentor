import React from 'react';
import styles from './quality.module.css';
import Card from './card';

export default function Quality() {
  return (
    <section className={`${styles.quality} spacing`}>
      <div className={styles.background}></div>
      <div className={styles.text}>
        <h2>Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality control
          program to avoid over-roasting or baking the coffee dry. Every bag of
          coffee is tagged with a roast date and batch number. Our goal is to roast
          consistent, user-friendly coffee, so that brewing is easy and enjoyable.
        </p>
      </div>
      <Card
        imageSrc={'/assets/about/desktop/image-quality.jpg'}
        imageAlt='white cup with some quality coffee'
        spacing={false}
        backdrop={false}
        className={styles.image}
        imageWidth={445}
        imageHeight={474}
      />
    </section>
  );
}
