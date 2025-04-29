import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import ServiceGrid from "./ServiceGrid";
import { Ref, useEffect, useState } from "react";
// Import the Service type to match ServiceGrid requirements
import { Service } from "../../types";
import FeaturedSection from "./FeaturedSection";
// import ScrollVelocityMarquee from "../ScrollVelocityMarquee";

interface StylingSectionProps {
  stylingRef: Ref<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stylingControls: any; // Consider using AnimationControls from framer-motion
  stylingServices: Service[]; // Using the Service type from imported types
}

const StylingSection: React.FC<StylingSectionProps> = ({ 
  stylingRef, 
  stylingControls, 
  // stylingServices 
}) => {
  // Add responsive state management
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={stylingRef}
      id="styling"
      className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-14 mandala-bg mandala-bg-left mandala-bg-small mandala-bg-rotate-reverse"
      aria-labelledby="styling-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={stylingControls}
            transition={{ duration: 0.8 }}
            className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px] group order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3"
              alt="Woman wearing traditional Bengali attire during styling consultancy"
              loading="lazy"
              className="w-full h-full object-cover rounded-lg shadow-md"
              width="600"
              height="600"
            />
            <div 
              className="absolute inset-0 bg-woodblack/20 group-hover:bg-woodblack/40 transition-colors duration-500 rounded-lg" 
              aria-hidden="true"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            animate={stylingControls}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 
              id="styling-heading" 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-woodblack section-title"
            >
              Styling Consultancy
            </h2>
            
            <p className="text-base sm:text-lg text-woodblack/80 mb-6 leading-relaxed">
              Our styling consultancy is a personalized journey into the art
              of self-expression through Bengali fashion. We believe that
              style is a powerful medium for cultural storytelling, and our
              expert consultants are here to help you write your unique
              narrative.
            </p>
            
            <p className="text-base sm:text-lg text-woodblack/80 mb-6 leading-relaxed">
              Whether you're seeking guidance for special occasions or looking
              to incorporate Bengali design elements into your everyday
              wardrobe, our styling services are tailored to your individual
              needs.
            </p>
            
            <Link 
              to="/styling-consultancy" 
              className="inline-block px-6 py-3 bg-woodblack text-white font-medium rounded-md hover:bg-woodblack/90 focus:outline-none focus:ring-2 focus:ring-woodblack/50 focus:ring-offset-2 transition-colors duration-300 btn"
              aria-label="Learn more about our styling consultancy services"
            >
              Begin Your Style Journey
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-16">
        <FeaturedSection />
        {/* <ScrollVelocityMarquee /> */}
        {/* <ServiceGrid services={stylingServices} /> */}
      </div>
    </section>
  );
};

export default StylingSection;