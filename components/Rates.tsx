import AnimatedSection from './AnimatedSection';

export default function Rates() {
  return (
    <section className="py-20 bg-teal-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-12">
            Rates and Insurance
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p>Individual Session - $200</p>
            <p>Couples Session - $240</p>
            
            <div className="pt-8">
              <p className="leading-relaxed max-w-3xl mx-auto">
                I do not accept insurance directly, but I provide a superbill for self-submission to your insurance provider. 
                Many clients find they can receive partial reimbursement for out-of-network services.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={400}>
          <div className="bg-white/60 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              Office Hours
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>In-person:</strong> Tuesday & Thursday, 10 AM–6 PM</p>
              <p><strong>Virtual via Zoom:</strong> Monday, Wednesday & Friday, 1 PM–5 PM</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}