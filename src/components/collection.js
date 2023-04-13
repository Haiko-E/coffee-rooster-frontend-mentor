import Image from 'next/image';
import React from 'react';
import CollectionItem from './collection-item';
import styles from './collection.module.css';

export default function Collection() {
  return (
    <section className={`${styles.collection} spacing`}>
      <h2>Our Collection</h2>
      <ul className={styles['collection-items']}>
        <CollectionItem
          title='Gran Espresso'
          image='/assets/home/desktop/image-gran-espresso.png'
          paragraph='Light and flavorful blend with cocoa and black pepper for an intense experience'
        />
        <CollectionItem
          title='Planalto'
          image='/assets/home/desktop/image-planalto.png'
          paragraph='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
        />
        <CollectionItem
          title='Piccollo'
          image='/assets/home/desktop/image-piccollo.png'
          paragraph='Mild and smooth blend featuring notes of toasted almond and dried cherry'
        />
        <CollectionItem
          title='Danche'
          image='/assets/home/desktop/image-danche.png'
          paragraph='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
        />
      </ul>
    </section>
  );
}
