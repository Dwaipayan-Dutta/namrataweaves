import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', section: 'home', label: 'Home' },
    { path: '/design-studio', section: 'design-studio', label: 'Design Studio' },
    { path: '/styling-consultancy', section: 'styling', label: 'Styling' },
    { path: '/bengal-immersion', section: 'bengal', label: 'Bengal Immersion' },
    { path: '/about', section: 'about', label: 'About NW' },
    { path: '/contact', section: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id');

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight &&
            sectionId
          ) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-300 p-3 rounded-2xl backdrop-blur-md shadow-lg 
        ${isScrolled 
          ? 'w-full top-0 rounded-none bg-dark-surface/90' 
          : 'w-[90%] top-6 bg-dark-surface/80 max-w-7xl'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-dark-text">
            NW
          </NavLink>
          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map(({ path, section, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative group transition-colors duration-300 text-dark-text hover:text-woodbrown-100 ${
                      (isActive || (location.pathname === '/' && activeSection === section))
                        ? 'text-woodbrown-100'
                        : ''
                    }`
                  }
                  onClick={() => {
                    if (location.pathname === '/' && section !== 'home') {
                      const element = document.getElementById(section);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-woodbrown-100 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: (location.pathname === '/' && activeSection === section) ? 1 : 0,
                      opacity: (location.pathname === '/' && activeSection === section) ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-woodbrown-100/50 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </NavLink>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden text-dark-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-dark-surface/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map(({ path, section, label }) => (
                <motion.div
                  key={path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-md text-base font-medium transition-colors duration-300 border-l-2 ${
                        (isActive || (location.pathname === '/' && activeSection === section))
                          ? 'text-woodbrown-100 border-woodbrown-100 bg-dark-surface2'
                          : 'text-dark-text border-transparent hover:text-woodbrown-100 hover:bg-dark-surface2/50'
                      }`
                    }
                    onClick={() => {
                      if (location.pathname === '/' && section !== 'home') {
                        const element = document.getElementById(section);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                          setMobileMenuOpen(false);
                        }
                      }
                    }}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;