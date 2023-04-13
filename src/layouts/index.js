import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Layout({ children, className }) {
  return (
    <>
      <Navbar className={className} />
      <main>{children}</main>
      <Footer className={className} />
    </>
  );
}
