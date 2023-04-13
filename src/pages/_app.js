import Layout from '@/layouts';
import { Fraunces, Barlow } from 'next/font/google';
import '@/styles/globals.css';

export const fraunces = Fraunces({
  variable: '--fraunces-font',
  weight: ['400', '600', '900'],
  subsets: ['latin'],
});
export const barlow = Barlow({
  variable: '--barlow-font',
  weight: ['400', '700', '600', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout
      className={`${fraunces.variable}, ${barlow.variable} , ${fraunces.className}`}
    >
      <main
        className={`${fraunces.variable}, ${barlow.variable} , ${fraunces.className}`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
