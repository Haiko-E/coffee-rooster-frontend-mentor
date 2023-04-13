import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import FacebookIcon from 'public/assets/shared/desktop/icon-facebook.svg';
import InstagramIcon from 'public/assets/shared/desktop/icon-instagram.svg';
import TwitterIcon from 'public/assets/shared/desktop/icon-twitter.svg';
import Link from 'next/link';

export default function Footer({ className }) {
  return (
    <section className={`${className} ${styles.footer}`}>
      <div>
        <Image
          src='/assets/shared/desktop/logo-white.svg'
          alt='Coffee roaster logo'
          width={237}
          height={27}
        />
        <ul className={` ${styles.nav} `}>
          <li>
            <Link className='link' href='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link className='link' href='/about'>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link className='link' href='/plan'>
              CREATE YOUR PLAN
            </Link>
          </li>
        </ul>

        <ul className={` ${styles.icons} `}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </ul>
      </div>
    </section>
  );
}
