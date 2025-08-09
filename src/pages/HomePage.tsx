import { ArrowRight, Code, Layout, Palette, Zap, Star, CheckCircle, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import About from '../components/shared/about';
import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Project = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  languages: string[];
  link: string;
};

type Service = {
  _id: string;
  icon: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
};

const iconMap: Record<string, React.ElementType> = {
  Code,
  Layout,
  Palette,
  Zap,
  CloudCog
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {
  const [mainProjects, setMainProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const codingImage = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceCards = useRef<(HTMLDivElement | null)[]>([]);
  const projectCards = useRef<(HTMLDivElement | null)[]>([]);
  const whyText = useRef<HTMLDivElement>(null);
  const whyImage = useRef<HTMLDivElement>(null);
  const statCards = useRef<(HTMLDivElement | null)[]>([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Check if mobile on mount and add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchMainProjects = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/main-projects`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMainProjects(data);
      } catch (error) {
        console.error('Error fetching main projects:', error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/services`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServices(data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchMainProjects();
    fetchServices();
  }, [baseUrl]);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0, ease: 'power3.out' },
    });

    // Hero animations
    tl.from('.hero-title', { y: 50, duration: 0.8 })
      .from('.hero-subtitle', { y: 50, duration: 0.8 }, '-=0.6')
      .from('.hero-buttons', { y: 30, duration: 0.6 }, '-=0.6')
      .from('.hero-clients', { y: 30, duration: 0.6 }, '-=0.5')
      .from('.hero-image', { x: 100, duration: 0.8 }, '-=0.5');

    // Services animations
    serviceCards.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          delay: i * 0.1,
          duration: 0.6,
        });
      }
    });

    // Projects animations
    projectCards.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          delay: i * 0.1,
          duration: 0.6,
        });
      }
    });

    // Why Choose Me animations
    gsap.from(whyText.current, {
      scrollTrigger: {
        trigger: '.why-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(whyImage.current, {
      scrollTrigger: {
        trigger: '.why-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
    });

    // Stats animations
    statCards.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
          opacity: 0,
          delay: i * 0.1,
          duration: 0.5,
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Mobile: coding image as first child */}
              {isMobile && (
                <div className="mb-10 lg:mb-0 w-full">
                  <img
                    // src="/profileimage.png"
                    src='/profileimage2.png'
                    alt="Professional Web Developer"
                    ref={codingImage}
                    className="rounded-lg mx-auto bg-transparent"
                    height={250}
                    width={300}
                  />
                </div>
              )}

              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                  Crafting Seamless <span className="text-primary-600">Animated Web Application</span> Experiences
                </h1>
                <p className="hero-subtitle text-xl text-gray-700 mb-8 max-w-xl">
                  Delivering modern, fast, and user-focused websites that convert visitors into customers.
                  Expert in Mern Stack Development, WordPress development and front-end technologies.
                </p>
                <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/MyResume.pdf"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View My Resume
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Let's Talk
                  </Link>
                </div>
                <div className="hero-clients mt-10 flex items-center">
                  <div className="flex -space-x-4">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Client"
                      className="w-10 h-10 object-cover rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Client"
                      className="w-10 h-10 object-cover rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Client"
                      className="w-10 h-10 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Trusted by 30+ clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Desktop: coding image as second child */}
              {!isMobile && (
                <div className="lg:w-1/2 hero-image">
                  <img
                    src='/profileimage2.png'
                    alt="Professional Web Developer"
                    ref={codingImage}
                    className="rounded-lg"
                    height={500}
                    width={500}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="WHAT I DO"
            title="Expert Services That Drive Results"
            description="I specialize in Mern Stack Development, WordPress development and front-end technologies that help businesses grow and succeed online."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div
                  className="card p-8"
                  key={service._id || idx}
                  ref={el => serviceCards.current[idx] = el}
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${service.color === 'primary' ? 'bg-primary-100' :
                    service.color === 'secondary' ? 'bg-secondary-100' : 'bg-accent-100'
                    }`}>
                    <Icon className={
                      service.color === 'primary' ? 'text-primary-600' :
                        service.color === 'secondary' ? 'text-secondary-600' : 'text-accent-600'
                    }
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className={`inline-flex items-center font-medium ${service.color === 'primary' ? 'text-primary-600 hover:text-primary-700' :
                      service.color === 'secondary' ? 'text-secondary-600 hover:text-secondary-700' :
                        'text-accent-600 hover:text-accent-700'
                      }`}
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="FEATURED WORK"
            title="Recent Projects I'm Proud Of"
            description="Take a look at some of my recent WordPress and front-end development projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainProjects.map((project, idx) => (
              <div
                key={project.id}
                className="card overflow-hidden"
                ref={el => projectCards.current[idx] = el}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <Link
                        to={project.link}
                        className="btn bg-white hover:bg-gray-100 text-primary-600 text-sm py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-primary-600">
                    {Array.isArray(project.languages) ? project.languages.join(', ') : project.languages}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-outline">
              Browse All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section why-section py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" ref={whyImage}>
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional at work"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2" ref={whyText}>
              <p className="text-primary-600 font-semibold mb-2">WHY CHOOSE ME</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Me Apart?</h2>
              <p className="text-gray-700 mb-8">
                With expertise in MERN stack development, front-end technologies and WordPress development,
                I bring a unique combination of technical skills and creative problem-solving to every project.
              </p>

              <div className="space-y-4">
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Front-End Skills</h3>
                    <p className="text-gray-600">
                      Proficient in modern front-end technologies including React, HTML5, and CSS3, GSAP for Smoother Animations.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">WordPress Expertise</h3>
                    <p className="text-gray-600">
                      Deep understanding of WordPress development, custom themes, and plugins.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">SEO Optimization</h3>
                    <p className="text-gray-600">
                      Ensuring your website ranks well in search engines and attracts organic traffic.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Reliable Support</h3>
                    <p className="text-gray-600">
                      Dedicated support and maintenance to keep your website running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card p-6"
                ref={el => statCards.current[idx] = el}
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;