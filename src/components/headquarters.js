import React from 'react';
import styles from './headquarters.module.css';
import Image from 'next/image';

export default function Headquarters() {
  return (
    <section className={`${styles.headquarters} spacing`}>
      <h2>Our headquarters</h2>
      <ul className={styles.list}>
        <li className={styles['list-item']}>
          <Image
            alt='Australia'
            width={49}
            height={44}
            src={'/assets/about/desktop/illustration-australia.svg'}
          />
          <h3>Australia</h3>
          <address>
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 4 9928 3629
          </address>
        </li>
        <li className={styles['list-item']}>
          <Image
            alt='Canada'
            width={49}
            height={44}
            src={'/assets/about/desktop/illustration-canada.svg'}
          />
          <h3>Canada</h3>
          <address>
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 4 9928 3629
          </address>
        </li>
        <li className={styles['list-item']}>
          <Image
            alt='United Kingdom'
            width={49}
            height={44}
            src={'/assets/about/desktop/illustration-uk.svg'}
          />
          <h3>United Kingdom</h3>
          <address>
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 4 9928 3629
          </address>
        </li>
      </ul>
    </section>
  );
}
