import { useState, FormEvent, useEffect, memo } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import axios from 'axios';

const ContactPage = () => {

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [Info, setInfo] = useState({ name: '', address: '', email: '', contact: '', github: '', linkedin: '' });



    useEffect(() => {
    try {
      const fetchSkills = async () => {
        const response = await axios.get(`${baseUrl}/api/saimInfo`);
        setInfo(response.data);
      };
      fetchSkills();
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  }, []);









  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus('submitting');

    try {
      await axios.post(`${baseUrl}/api/send-message`, formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-80"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-slide-up">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Let's discuss how I can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading 
                subtitle="CONTACT ME"
                title="Send a Message"
                description="Have a project in mind? Fill out the form below to get started."
                alignment="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Your email address"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && <p className="form-error">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input h-36 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`btn-primary w-full flex items-center justify-center ${
                    formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && (
                    <>
                      <Check size={18} className="mr-2" />
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'error' && 'Error! Please try again'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading 
                subtitle="GET IN TOUCH"
                title="Contact Information"
                description="Here's how you can reach me directly."
                alignment="left"
              />

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">
                     {Info.address} <br />
                      (Available for remote work worldwide)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone & WhatsApp</h3>
                    <a href="tel:+923240094621" className="text-gray-600 hover:text-primary-600 transition-colors block">
                      {Info.contact}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:alis5597153@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                      {Info.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  I typically respond to inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/MuhammadSaim0604"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/muhammad-saim-009354377"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/legendsaim786" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/legendsaim786/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ContactPage);
