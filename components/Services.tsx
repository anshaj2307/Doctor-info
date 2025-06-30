'use client';

import AnimatedSection from './AnimatedSection';

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Navigate life's pressures with confidence using evidence-based cognitive-behavioral techniques, mindfulness practices, and personalized coping strategies designed to reduce overwhelm and build lasting resilience.",
      image: "/images/Service1.jpeg",
      highlight: "CBT & Mindfulness Approaches"
    },
    {
      title: "Relationship & Couples Counseling", 
      description: "Strengthen your connections through improved communication, conflict resolution, and deeper emotional intimacy. Whether working through challenges or enhancing an already strong relationship, find the tools to thrive together.",
      image: "/images/Service2.jpeg",
      highlight: "Communication & Intimacy Focus"
    },
    {
      title: "Trauma-Informed Healing",
      description: "Process difficult experiences in a safe, supportive environment using trauma-informed approaches that honor your pace and resilience. Develop healthy coping mechanisms while reclaiming your sense of safety and empowerment.",
      image: "/images/Service3.jpg",
      highlight: "Safe, Empowering Recovery"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6">
              Services Offered
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive psychological care tailored to your unique needs, combining evidence-based practices 
              with compassionate, personalized support for lasting change.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={index * 200}
            >
              <div className="group text-center">
                {/* Enhanced Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 mx-auto max-w-sm shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm font-medium text-teal-700">
                        {service.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.description}.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-medium text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/*<p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>*/}

                  {/* Call to Action */}
                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm group-hover:underline transition-all duration-300"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Information Section */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="mt-20 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-6">
                Personalized Treatment Approach
              </h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-8">
                Every individual's journey is unique. I integrate multiple therapeutic modalities—including 
                cognitive-behavioral therapy, mindfulness-based interventions, and trauma-informed care—to 
                create a treatment plan that honors your specific needs, goals, and pace of healing.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Evidence-Based Practice</span>
                <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Culturally Responsive</span>
                <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Strength-Based Approach</span>
                <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Collaborative Care</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}