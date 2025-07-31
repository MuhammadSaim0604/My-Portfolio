import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Code, Palette, ShoppingCart, Globe, Cpu, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color = "primary" 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features: string[];
  color?: "primary" | "secondary" | "accent";
}) => {
  const colorClasses = {
    primary: {
      bg: "bg-primary-100",
      text: "text-primary-600",
      hover: "hover:bg-primary-700",
      btn: "bg-primary-600 hover:bg-primary-700",
    },
    secondary: {
      bg: "bg-secondary-100",
      text: "text-secondary-600",
      hover: "hover:bg-secondary-700",
      btn: "bg-secondary-600 hover:bg-secondary-700",
    },
    accent: {
      bg: "bg-accent-100",
      text: "text-accent-600",
      hover: "hover:bg-accent-700",
      btn: "bg-accent-600 hover:bg-accent-700",
    },
  };

  return (
    <div className="card p-8 h-full flex flex-col">
      <div className={`${colorClasses[color].bg} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
        <Icon className={colorClasses[color].text} size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="mb-8 space-y-2 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className={`mr-2 ${colorClasses[color].text}`}>•</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        to="/contact" 
        className={`btn ${colorClasses[color].btn} text-white mt-auto`}
      >
        Inquire Now
      </Link>
    </div>
  );
};

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Code,
  Palette,
  ShoppingCart,
  Globe,
  Cpu,
  HardDrive,
};

const ServicesPage = () => {
  const [services, setServices] = useState<any[]>([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${baseUrl}/api/services`)
      .then(res => setServices(res.data))
      .catch(err => console.error("Error fetching services:", err));
  }, []);

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
            My Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Comprehensive web development and design solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

 {/* Services Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="WHAT I OFFER"
            title="Comprehensive Web Solutions"
            description="From concept to completion, I offer end-to-end services to bring your vision to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Layout;
              return (
                <ServiceCard
                  key={idx}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  color={service.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="MY PROCESS"
            title="How We'll Work Together"
            description="A transparent, collaborative approach to ensure your project is completed efficiently and meets your expectations."
          />

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      STEP 1
                    </span>
                    <h3 className="text-2xl font-bold mb-3">Discovery & Planning</h3>
                    <p className="text-gray-600">
                      We'll start with a detailed consultation to understand your business goals, target audience, and project requirements. Together, we'll develop a comprehensive project plan with clear deliverables and timelines.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold z-10 mb-6 md:mb-0">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold z-10 mb-6 md:mb-0">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      STEP 2
                    </span>
                    <h3 className="text-2xl font-bold mb-3">Design & Prototyping</h3>
                    <p className="text-gray-600">
                      Based on our discovery phase, I'll create wireframes and design concepts for your approval. We'll refine these designs together until they perfectly match your vision and business needs.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      STEP 3
                    </span>
                    <h3 className="text-2xl font-bold mb-3">Development</h3>
                    <p className="text-gray-600">
                      With approved designs in hand, I'll begin development, building out your website or application with clean, efficient code. Regular updates will keep you informed of progress throughout this phase.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold z-10 mb-6 md:mb-0">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold z-10 mb-6 md:mb-0">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      STEP 4
                    </span>
                    <h3 className="text-2xl font-bold mb-3">Testing & Refinement</h3>
                    <p className="text-gray-600">
                      Comprehensive testing across devices and browsers ensures everything works flawlessly. We'll make any necessary adjustments to perfect the user experience and functionality.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      STEP 5
                    </span>
                    <h3 className="text-2xl font-bold mb-3">Launch & Support</h3>
                    <p className="text-gray-600">
                      Once everything is ready, we'll launch your project to the world. I'll provide training for content management and ongoing support to ensure your continued success.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold z-10">
                    5
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
     {/* <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="PRICING"
            title="Investment Plans"
            description="Transparent pricing options tailored to fit different project needs and budgets."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">


            <div className="card p-8 border border-gray-200 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Basic Website</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for small businesses looking to establish an online presence
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$100</span>
                  <span className="text-gray-500 ml-2">starting at</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Up to 5 pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Contact form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Basic SEO setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Social media integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">2 weeks of support</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-outline w-full text-center mt-auto">
                Get Started
              </Link>
            </div>



            <div className="card p-8 border-2 border-primary-500 relative flex flex-col h-full shadow-lg">
              <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium transform translate-y-0 translate-x-0">
                POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Business Website</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solution for growing businesses with more complex needs
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-gray-500 ml-2">starting at</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Up to 10 pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Custom design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Advanced contact forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Content management system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Advanced SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Google Analytics setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">1 month of support</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-primary w-full text-center mt-auto">
                Get Started
              </Link>
            </div>



            <div className="card p-8 border border-gray-200 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">E-commerce / Custom</h3>
                <p className="text-gray-600 mb-4">
                  Fully customized solutions for online stores or complex web applications
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$200+</span>
                  <span className="text-gray-500 ml-2">starting at</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Unlimited pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">E-commerce functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Custom features & integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Advanced security features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Comprehensive SEO package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">3 months of support</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-outline w-full text-center mt-auto">
                Get Started
              </Link>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need a custom solution? Contact me for a personalized quote tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section> */}

      {/* FAQs Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about my services and process."
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to complete a website?</h3>
                <p className="text-gray-700">
                  Project timelines vary depending on complexity and scope. A basic Mern based website typically takes 2-4 days, while more complex projects like Mern Based e-commerce sites with admin panel and dashboard functionality may take 1-2 weeks. I'll provide a detailed timeline during our initial consultation.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer website maintenance services?</h3>
                <p className="text-gray-700">
                  Yes, I offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. These services include regular updates, security monitoring, backups, and technical support.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold mb-2">What is your payment structure?</h3>
                <p className="text-gray-700">
                  I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange a phased payment schedule tied to project milestones.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold mb-2">Will my website be mobile-friendly?</h3>
                <p className="text-gray-700">
                  Absolutely! All websites I create are fully responsive, ensuring they look and function perfectly on all devices, from desktops to smartphones. Mobile optimization is a standard part of every project.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold mb-2">Can you help with hosting and domain registration?</h3>
                <p className="text-gray-700">
                  Yes, I can assist with selecting the right hosting provider and registering your domain name. I'll also handle the technical setup to ensure your website is properly configured and secure.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold mb-2">Do you provide content for the website?</h3>
                <p className="text-gray-700">
                  While I focus primarily on design and development, I can provide basic content guidance and structure. For comprehensive content creation, I can recommend professional copywriters who specialize in web content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
