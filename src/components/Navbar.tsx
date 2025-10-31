import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react'; // right arrow icon in contact button
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../Assetes/Pranexit_Logo.png' // import your logo here

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/testimonials', label: 'Testimonials' },
    // Removed Contact from here, added as a separate button
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
         <a href="/">
  <img 
    src={logo} 
    alt="Pranexity Logo" 
    className="w-12 h-auto md:w-20 md:h-auto object-contain transition-transform hover:scale-105 bg-transparent"
  />
</a>


      
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}

              //changed navbar links on hover
                className={`relative font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  isScrolled
                  ? // changed for white navbar background
                  location.pathname === link.path
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-md'
                  : 'text-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-black shadow-sm'
                  : // changed for transparent navbar background
                  location.pathname === link.path
                  ? 'bg-white/10 text-white shadow-lg border border-white/20 backdrop-blur-md'
                  : 'text-white hover:bg-white/10 hover:text-cyan-200 backdrop-blur-md'
                  }`}

              >
                {link.label}
                
                {/* {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"
                    layoutId="navbar-indicator"
                  />
                )} */}
              </Link>
            ))}

            {/* new contact us button */}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:bg-gray-900 transition-all shadow-md"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* mobile dropdown menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="py-4 px-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* contact us button in mobile view */}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
