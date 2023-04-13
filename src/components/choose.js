import React from 'react';
import CollectionItem from './collection-item';
import styles from './choose.module.css';

export default function Choose() {
  return (
    <section className={`${styles.choose} spacing-sm`}>
      <div className={styles.background}></div>
      <div className={styles.header}>
        <h2>Why choose us ?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level
        </p>
      </div>
      <ul>
        <CollectionItem
          title='Best quality'
          image='/assets/home/desktop/icon-coffee-bean.svg'
          paragraph='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
          listStyle={styles['list-item']}
          contentStyle={styles.content}
        />
        <CollectionItem
          title='Exclusive benefits'
          image='/assets/home/desktop/icon-gift.svg'
          paragraph='Special offers and swag when you subscribe, including 30% off your first shipment.
          '
          listStyle={styles['list-item']}
          contentStyle={styles.content}
        />
        <CollectionItem
          title='Free shipping '
          image='/assets/home/desktop/icon-truck.svg'
          paragraph='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
          listStyle={styles['list-item']}
          contentStyle={styles.content}
        />
      </ul>
    </section>
  );
}
