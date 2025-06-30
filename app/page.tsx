import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Quote from '@/components/Quote';
import Services from '@/components/Services';
import Rates from '@/components/Rates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Quote />
      <Services />
      <Rates />
      <FAQ />
      <Contact />
    </main>
  );
}