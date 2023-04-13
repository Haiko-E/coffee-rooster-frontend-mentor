import Choose from '@/components/choose';
import Collection from '@/components/collection';
import Footer from '@/components/footer';
import Header from '@/components/navbar';
import Hero from '@/components/hero';
import Works from '@/components/works';

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Choose />
      <Works title='How it works' button='Create your plan' />
    </>
  );
}
