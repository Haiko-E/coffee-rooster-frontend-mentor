import Image from 'next/image';
import { useState } from 'react';
import Hamburger from './hamburger';
import styles from './navbar.module.css';
import Link from 'next/link';
export default function Navbar({ className }) {
  const [isHamburger, setIsHamburger] = useState(false);

  return (
    <nav className={`${className} ${styles.header} `}>
      <Image
        src='/assets/shared/desktop/logo.svg'
        alt='Coffee roaster logo'
        width={237}
        height={27}
      />
      <ul className={`${styles.nav} ${isHamburger ? styles.open : ''}`}>
        <li onClick={() => setIsHamburger(!isHamburger)}>
          <Link className='link' href='/'>
            HOME
          </Link>
        </li>
        <li onClick={() => setIsHamburger(!isHamburger)}>
          <Link className='link' href='/about'>
            ABOUT US
          </Link>
        </li>
        <li onClick={() => setIsHamburger(!isHamburger)}>
          <Link className='link' href='/plan'>
            CREATE YOUR PLAN
          </Link>
        </li>
      </ul>
      <Hamburger toggleHamburger={setIsHamburger} isHamburger={isHamburger} />
    </nav>
  );
}
