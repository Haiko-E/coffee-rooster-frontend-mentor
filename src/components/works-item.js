import React from 'react';
import Stripe from './stripe';
import styles from './works-item.module.css';

export default function WorksItem({ withStripe, number, title, text }) {
  return (
    <li className={styles.item}>
      <Stripe withStripe={withStripe} />
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
}
