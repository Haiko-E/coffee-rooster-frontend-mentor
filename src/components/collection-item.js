import React from 'react';
import Image from 'next/image';
import styles from './collection-item.module.css';

export default function CollectionItem({
  title,
  paragraph,
  image,
  listStyle,
  contentStyle,
}) {
  return (
    <li className={`${styles.item} ${listStyle}`}>
      <Image src={image} alt='gran espresso' width={452} height={356} />
      <div className={`${styles.content} ${contentStyle}`}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </li>
  );
}
