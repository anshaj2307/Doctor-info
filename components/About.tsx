import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-8">
                About Dr. Serena Blake
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Finding time and opportunities to care for ourselves can be incredibly 
                  challenging in today's busy and demanding world. I believe therapy 
                  offers a dedicated space for self-care, providing the support and tools 
                  needed to improve this essential practice. Therapy can help 
                  individuals identify and clarify their goals, values, and the various 
                  elements that contribute to their well-being, recognizing that these 
                  aspects vary from person to person.
                </p>
                
                <p>
                  I am dedicated to supporting this journey by offering active listening, 
                  psychological knowledge, empathy, compassion, and insights into 
                  behavioral patterns and tendencies. I hold a doctorate in Clinical 
                  Psychology (PsyD) and have eight years of experience with over 500 
                  client sessions. My experience spans therapy and psychological assessment 
                  across diverse populations and settings.
                </p>

                <p>
                  Dr. Serena Blake blends evidence-based approaches—like cognitive-behavioral 
                  therapy and mindfulness—with compassionate, personalized care to help you 
                  overcome anxiety, strengthen relationships, and heal from trauma. Whether 
                  you meet in her Los Angeles office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fadeInRight" delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/DR.png"
                  alt="Dr. Serena Blake"
                  className="w-full h-full object-cover object-center"
                />
                {/* Optional subtle overlay for professional look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}