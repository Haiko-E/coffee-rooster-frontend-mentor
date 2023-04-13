import React from 'react';
import styles from './create-plan.module.css';
import Card from './card';

export default function CreatePlan() {
  return (
    <Card
      imageAlt='cup of coffee with a heart'
      imageSrc={'/assets/plan/desktop/image-hero-blackcup.jpg'}
      className={styles.plan}
    >
      <h1 className=''>Create a plan</h1>
      <p>
        Build a subscription plan that best fits your needs. We offer an assortment
        of the best artisan coffees from around the globe delivered fresh to your
        door.
      </p>
    </Card>
  );
}
