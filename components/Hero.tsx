'use client';

import AnimatedSection from './AnimatedSection';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/images/video/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black/40"></div> {/* Optional dark overlay */}
  </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Psychological Care for<br />
            Change, Insight, and Well-Being
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={400}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-light mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Offering individual psychotherapy for adults in Los Angeles through compassionate, 
            evidence-based approaches that honor your unique journey
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={600}>
          <button
            onClick={scrollToContact}
            className="inline-block bg-teal-600/80 hover:bg-teal-600 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            SCHEDULE A CONSULTATION
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}