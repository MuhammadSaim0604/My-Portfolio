import { Link } from 'react-router-dom';
import { Laptop, Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4">
          <div className="col-span-1">
            <Link to="/" className="flex items-center text-white font-bold text-xl mb-4">
              <Laptop className="mr-2" size={24} />
              <span>Muhammad Saim</span>
            </Link>
            <p className="text-gray-300 mb-4">
             Full Stack Developer | MERN Stack Developer | Django | WordPress development Crafting digital experiences with code and creativity
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/MuhammadSaim0604" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-saim-009354377" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/legendsaim786" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/legendsaim786/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              {/* <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">Front-End Development</li>
              <li className="text-gray-300 hover:text-white transition-colors">WordPress Development</li>
              <li className="text-gray-300 hover:text-white transition-colors">SEO Optimization</li>
              <li className="text-gray-300 hover:text-white transition-colors">Web Design</li>
              <li className="text-gray-300 hover:text-white transition-colors">Theme Customization</li>
              <li className="text-gray-300 hover:text-white transition-colors">Meta Ads Marketing</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-400" />
                <span className="text-gray-300">Bahawalpur, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-primary-400" />
                <span className="text-gray-300">+92 302 078 8597</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-primary-400" />
                <a href="mailto:majorsaim481@gmail.com" className="text-gray-300 hover:text-white transition-colors">majorsaim481@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Muhammad Saim. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
