import { ArrowRight, Code, Layout, Palette, Zap, Star, CheckCircle, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import About from '../components/shared/about';
import { useEffect, useState } from 'react';

type Project = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  languages: string[];
  link: string;
};

const iconMap: Record<string, React.ElementType> = {
  Code,
  Layout,
  Palette,
};

const HomePage = () => {
  const [MainPorjects, setMainProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<any[]>([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Add any necessary initialization code here
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
    fetchMainProjects();

    // Fetch services
    const fetchServices = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/services`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServices(data.slice(0, 6)); // Only first 6 services
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);



  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">

            <div className="flex flex-col lg:flex-row items-center">
              {/* Mobile: coding image as first child, Desktop: keep as is */}
              {window.innerWidth < 1024 && (
                <div className="mb-10 lg:mb-0 w-full">
                  <img
                    src="/coding.png"
                    alt="Professional Web Developer"
                    className="rounded-lg shadow-xl animate-fade-in mx-auto"
                  />
                </div>
              )}

              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 animate-slide-up">
                  Crafting Seamless <span className="text-primary-600">Animated Web Application</span> Experiences
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Delivering modern, fast, and user-focused websites that convert visitors into customers. Expert in Mern Stack Development, WordPress development and front-end technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Link to="/MyResume.pdf" className="btn-primary" target='_blank' rel="noopener noreferrer">
                    View My Resume
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Let's Talk
                  </Link>
                </div>
                <div className="mt-10 flex items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
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
              {window.innerWidth >= 1024 && (
                <div className="lg:w-1/2">
                  <img
                    src="coding.png"
                    alt="Professional Web Developer"
                    className="rounded-lg shadow-xl animate-fade-in"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      <About />


      {/* Services Section */}
      <section className="section">
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
                <div className="card p-8" key={service._id || idx}>
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${service.color === 'primary' ? 'bg-primary-100' : service.color === 'secondary' ? 'bg-secondary-100' : 'bg-accent-100'}`}>
                    <Icon className={service.color === 'primary' ? 'text-primary-600' : service.color === 'secondary' ? 'text-secondary-600' : 'text-accent-600'} size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className={`inline-flex items-center font-medium ${service.color === 'primary' ? 'text-primary-600 hover:text-primary-700' : service.color === 'secondary' ? 'text-secondary-600 hover:text-secondary-700' : 'text-accent-600 hover:text-accent-700'}`}>
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
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="FEATURED WORK"
            title="Recent Projects I'm Proud Of"
            description="Take a look at some of my recent WordPress and front-end development projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


            {MainPorjects.map((project) => (
              <div key={project.id} className="card overflow-hidden">
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
                  <span className="text-sm font-medium text-primary-600">{project.languages}</span>
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
      <section className="section bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional at work"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-primary-600 font-semibold mb-2">WHY CHOOSE ME</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Me Apart?</h2>
              <p className="text-gray-700 mb-8">
                With expertise in MERN stack development, front-end technologies and WordPress development, I bring a unique combination of technical skills and creative problem-solving to every project.
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
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="card p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;