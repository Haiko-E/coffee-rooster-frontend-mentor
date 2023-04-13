import React from 'react';
import Image from 'next/image';
import About from '@/components/about';
import Card from '@/components/card';
import Commitment from '@/components/commitment';
import Quality from '@/components/quality';
import Headquarters from '@/components/headquarters';

export default function AboutPage() {
  return (
    <>
      <About></About>
      <Commitment></Commitment>
      <Quality />
      <Headquarters />
    </>
  );
}
