import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
} 