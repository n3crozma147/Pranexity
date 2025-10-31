import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram, Sparkles } from 'lucide-react';
import logo from '../Assetes/Pranexit_Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Pranexity Logo"
                className="w-20 h-auto object-contain transition-transform hover:scale-105"
              />
            </a>
            <p className="text-gray-300 text-sm mb-4">
              AI that elevates, not just automates. Empowering communities with accessible technology.
            </p>
            <p className="italic text-cyan-400 text-sm mb-6">
              “Building intelligence with empathy.”
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-cyan-400 focus:outline-none focus:text-cyan-300 transition-colors"
              >
                <Linkedin className="w-10 h-5" />
              </a>
              <a
                href="https://twitter.com/pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 focus:outline-none focus:text-blue-300 transition-colors"
              >
                <Twitter className="w-10 h-5" />
              </a>
              <a
                href="https://www.facebook.com/pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 focus:outline-none focus:text-blue-400 transition-colors"
              >
                <Facebook className="w-10 h-5" />
              </a>
              <a
                href="https://www.instagram.com/pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 focus:outline-none focus:text-pink-400 transition-colors"
              >
                <Instagram className="w-10 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-500 focus:outline-none focus:text-red-400 transition-colors"
              >
                <Youtube className="w-10 h-5" />
              </a>
              <a
                href="https://www.glassdoor.co.in/Overview/Working-at-Pranexity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Glassdoor"
                className="text-gray-400 hover:text-green-400 focus:outline-none focus:text-green-300 transition-colors"
              >
                <Sparkles className="w-10 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section - Two Column Clickable Grid */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Our Services</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Healthcare', path: '/services/healthcare' },
                { name: 'Education', path: '/services/education' },
                { name: 'Finance', path: '/services/finance' },
                { name: 'Retail', path: '/services/retail' },
                { name: 'Agriculture', path: '/services/agriculture' },
                { name: 'Logistics', path: '/services/logistics' },
                { name: 'Smart Cities', path: '/services/smart-cities' },
              ].map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="text-gray-200 text-sm text-center bg-slate-800 rounded-lg px-4 py-2 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-md"
                  role="button"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:support@pranexity.com"
                  className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors"
                >
                  support@pranexity.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98457 74757</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Pranexity. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
