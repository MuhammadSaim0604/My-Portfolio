import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-primary-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to work together?</h2>
        <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-lg">
          I'm available for MERN Stack Developer | Django | WordPress development projects. 
          Let's create something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="btn bg-white hover:bg-gray-100 text-primary-600 font-semibold">
            Get in Touch
          </Link>
          <a 
            href="https://wa.me/923020788597" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-primary-700 hover:bg-primary-800 text-white font-semibold">
            WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;