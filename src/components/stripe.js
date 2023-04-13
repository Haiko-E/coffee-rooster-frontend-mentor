import React from 'react';
import styles from './stripe.module.css';

export default function Stripe({ withStripe }) {
  return (
    <div className={styles.item}>
      <div className={styles['bullet']}></div>
      <div className={withStripe ? styles['stripe'] : ''}></div>
    </div>
  );
}
