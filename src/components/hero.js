import Image from 'next/image';
import React from 'react';
import styles from './hero.module.css';
import Card from './card';
import Link from 'next/link';

export default function Hero() {
  return (
    <Card
      imageSrc={'/assets/home/desktop/image-hero-coffeepress.jpg'}
      imageAlt={'Coffee Hero'}
      className={styles.image}
    >
      <h1 className={styles.head}>Great Coffee made simple.</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly curated
        artisan coffees from our best roasters delivered directly to your door, at
        your schedule.
      </p>
      <Link href={'/plan'} className='btn'>
        Create your plan
      </Link>
    </Card>
  );
}
