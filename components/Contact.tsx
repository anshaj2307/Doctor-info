'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredContactMethod: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }

    if (!formData.preferredContactMethod.trim()) {
      newErrors.preferredContactMethod = 'Preferred contact method is required';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="scaleIn">
            <div className="bg-teal-50 rounded-lg p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">
                Thank You for Reaching Out
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                I've received your message and will get back to you within 24 hours. 
                I look forward to speaking with you soon.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to take the first step? I'm here to support you on your journey toward wellness and growth.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-6 sm:mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Office Location</p>
                      <p className="text-gray-600 text-sm sm:text-base">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Phone</p>
                      <p className="text-gray-600 text-sm sm:text-base">(323) 555-0192</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Email</p>
                      <p className="text-gray-600 text-sm sm:text-base">serena@blakepsychology.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Office Hours</p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        In-person: Tue & Thu, 10 AM–6 PM<br />
                        Virtual: Mon, Wed & Fri, 1 PM–5 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-6 sm:mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    What brings you here? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please share what you're hoping to work on or any questions you have..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="relative">
                    <select
                      id="preferredContactMethod"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors appearance-none bg-white cursor-pointer ${
                        errors.preferredContactMethod ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="" className="text-gray-500">Please select your preferred contact method</option>
                      <option value="in-person">In-Person Session (Tue & Thu, 10 AM–6 PM)</option>
                      <option value="virtual">Virtual Session via Zoom (Mon, Wed & Fri, 1 PM–5 PM)</option>
                      <option value="not-sure">Not sure - Need Guidance</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.preferredContactMethod && <p className="mt-1 text-sm text-red-600">{errors.preferredContactMethod}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 flex-shrink-0"
                  />
                  <label htmlFor="agreeToContact" className="text-sm text-gray-700 leading-relaxed">
                    I agree to be contacted by Dr. Serena Blake regarding my inquiry *
                  </label>
                </div>
                {errors.agreeToContact && <p className="text-sm text-red-600">{errors.agreeToContact}</p>}

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 sm:py-4 px-6 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}