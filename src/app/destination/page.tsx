'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';



import TravelDestinations from '@/components/cards';
export default function Home() {

  useEffect( () => {
    const lenis: Lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Section />
     
      <div><TravelDestinations /></div>
    </main>
  );
}
