import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Head from 'next/head';

export default function Layout({ children, className }) {
  return (
    <>
      <Head>
        <link rel='favicon Haiko' href='favicon.svg' />
      </Head>
      <Navbar className={className} />
      <main>{children}</main>
      <Footer className={className} />
    </>
  );
}
