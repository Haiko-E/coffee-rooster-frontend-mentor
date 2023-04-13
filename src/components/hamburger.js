import React from 'react';
import styles from './hamburger.module.css';

export default function Hamburger({ toggleHamburger, isHamburger }) {
  function toggleHam() {
    toggleHamburger(!isHamburger);
  }

  return (
    <div
      onClick={toggleHam}
      className={`${styles.hamburger} ${isHamburger ? styles.open : 'styles.open'}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
