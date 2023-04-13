import React from 'react';
import styles from './about.module.css';
import Card from './card';

export default function About() {
  return (
    <Card
      imageSrc={'/assets/about/desktop/image-hero-whitecup.jpg'}
      imageAlt={'White cup of coffee'}
      className={styles.image}
    >
      <h1 className={styles.head}>About us</h1>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999, highlighting
        stories of coffee from around the world. We have since been dedicated to
        bring the perfect cup - from bean to brew - in every shipment.
      </p>
    </Card>
  );
}
