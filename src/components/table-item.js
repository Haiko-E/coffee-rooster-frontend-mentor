import React from 'react';
import styles from './table-item.module.css';

export default function TableItem({ num, title, className }) {
  return (
    <li className={`${styles['table-item']} ${className}`}>
      <span className={styles.number}>{num}</span>
      <span className={styles.title}>{title}</span>
    </li>
  );
}
