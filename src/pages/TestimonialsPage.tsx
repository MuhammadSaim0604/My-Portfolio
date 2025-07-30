import { Star } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  project?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Owner",
    company: "Fashion Boutique",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Ali created an incredible website for my business that has significantly increased my online sales. The design is beautiful and the site is extremely easy to use. The entire process from start to finish was smooth and professional. I would highly recommend Ali to anyone looking for a top-notch web designer and developer.",
    rating: 5,
    project: "E-commerce Website",
  },
  {
    id: 2,
    name: "Mark Davis",
    position: "CEO",
    company: "Tech Startup",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Working with Ali was a great experience. They understood my vision perfectly and delivered a website that exceeded my expectations. Very professional and responsive throughout the entire project. What impressed me most was their ability to translate technical concepts into simple terms I could understand.",
    rating: 5,
    project: "Corporate Website",
  },
  {
    id: 3,
    name: "Jessica Wong",
    position: "Marketing Director",
    company: "Retail Group",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Ali completely transformed our outdated website into a modern, functional platform that has gotten rave reviews from our customers. Would definitely hire again! Their attention to detail and creative solutions to our unique challenges made all the difference in the success of our project.",
    rating: 5,
    project: "Website Redesign",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Founder",
    company: "Health & Fitness App",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "I had a complex app idea but wasn't sure how to bring it to life. Ali not only understood my vision but enhanced it with their expertise. The final product exceeded my expectations and our users love the intuitive interface. I've already recommended Ali to several colleagues.",
    rating: 5,
    project: "Mobile App Design",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    position: "Small Business Owner",
    company: "Local Bakery",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "As a small business owner with limited budget, I was concerned about investing in a professional website. Ali worked within my budget to create a beautiful site that has helped grow my business exponentially. Their expertise and guidance throughout the process was invaluable.",
    rating: 5,
    project: "Small Business Website",
  },
  {
    id: 6,
    name: "Michael Chen",
    position: "Product Manager",
    company: "Software Company",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Ali's technical skills and design sensibility are top-notch. They delivered our project on time and on budget, with excellent communication throughout. What sets them apart is their proactive approach to problem-solving and suggesting improvements we hadn't even considered.",
    rating: 5,
    project: "Web Application",
  },
  {
    id: 7,
    name: "Lisa Patel",
    position: "Director",
    company: "Digital Marketing Agency",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "We've worked with many web developers over the years, and Ali is by far the best. Their ability to understand our clients' needs and translate them into beautiful, functional websites has made them an invaluable partner for our agency. We look forward to collaborating on many more projects.",
    rating: 5,
    project: "Multiple Client Websites",
  },
  {
    id: 8,
    name: "Robert Wilson",
    position: "Owner",
    company: "Restaurant Chain",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Ali developed an online ordering system for our restaurant that has streamlined our operations and increased our sales. Their understanding of both the technical and business aspects of our needs resulted in a solution that has had a real impact on our bottom line.",
    rating: 5,
    project: "Restaurant Ordering System",
  },
];

const TestimonialsPage = () => {
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
            Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Don't take my word for it—here's what my clients have to say
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="CLIENT FEEDBACK"
            title="What People Are Saying"
            description="Hear from satisfied clients who have worked with me on various projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <div key={testimonial.id} className="card p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    {testimonial.project && (
                      <p className="text-xs text-primary-600 mt-1">Project: {testimonial.project}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src={testimonials[6].image} 
                  alt={testimonials[6].name} 
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-4">
                  {[...Array(testimonials[6].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  "{testimonials[6].content}"
                </p>
                <div>
                  <h3 className="text-xl font-bold">{testimonials[6].name}</h3>
                  <p className="text-gray-600">{testimonials[6].position}, {testimonials[6].company}</p>
                  {testimonials[6].project && (
                    <p className="text-sm text-primary-600 mt-1">Project: {testimonials[6].project}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(6, 8).map((testimonial) => (
              <div key={testimonial.id} className="card p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    {testimonial.project && (
                      <p className="text-xs text-primary-600 mt-1">Project: {testimonial.project}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Upwork Stats */}
      <section className="section pt-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">My Upwork Profile Stats</h2>
                  <p className="text-gray-600 mb-6">
                    I maintain a 5-star rating on Upwork with consistent client satisfaction and project success.
                  </p>
                  <a 
                    href="https://www.upwork.com/freelancers/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View My Upwork Profile
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                    <p className="text-gray-600">Job Success</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">5.0/5</div>
                    <p className="text-gray-600">Client Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                    <p className="text-gray-600">Completed Jobs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                    <p className="text-gray-600">On-Time Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;