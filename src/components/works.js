import React from 'react';
import WorksItem from './works-item';
import styles from './works.module.css';
import Link from 'next/link';

export default function Works({ title, button, className }) {
  return (
    <section className={`${styles.works} ${className}   spacing`}>
      {title && <h2>{title}</h2>}
      <ul className={styles['works-items']}>
        <WorksItem
          withStripe={true}
          title='Pick your coffee'
          number='01'
          text='Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out.'
        />
        <WorksItem
          withStripe={true}
          title='Choose the frequency'
          number='02'
          text='Customize your order frequency, quantity, even your roast style and grind type. 
          Pause, skip or cancel your subscription with no commitment through our online portal.'
        />
        <WorksItem
          withStripe={false}
          title='Receive and enjoy!'
          number='03'
          text='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
          world-class coffees curated to provide a distinct tasting experience.'
        />
      </ul>
      {button && (
        <Link href={'/plan'} className='btn'>
          {button}
        </Link>
      )}
    </section>
  );
}
