import AnimatedSection from './AnimatedSection';

export default function Quote() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8">
            Therapy can be a space where you invest in yourself—<br />
            one of the highest forms of self-care.
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="scaleIn" delay={200}>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={400}>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, 
            or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it 
            alone. Therapy offers you the time and space to work toward wellness and peace.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}