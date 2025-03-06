/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceGrid from "./ServiceGrid";
import { Ref } from "react";

interface StylingSectionProps {
  stylingRef: Ref<HTMLElement>;
  stylingControls: any; // Adjust type if you have a specific type for animation controls
  stylingServices: any[]; // Adjust based on actual data structure
}

const StylingSection: React.FC<StylingSectionProps> = ({ stylingRef, stylingControls, stylingServices }) => {
  return (
    <section
      ref={stylingRef}
      id="styling"
      className="py-24 mandala-bg mandala-bg-left mandala-bg-small mandala-bg-rotate-reverse"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={stylingControls}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] group order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3"
              alt="Styling Consultancy"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-woodblack/20 group-hover:bg-woodblack/40 transition-colors duration-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={stylingControls}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="section-title">Styling Consultancy</h2>
            <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
              Our styling consultancy is a personalized journey into the art
              of self-expression through Bengali fashion. We believe that
              style is a powerful medium for cultural storytelling, and our
              expert consultants are here to help you write your unique
              narrative. Through careful curation and personalized guidance,
              we help you blend traditional Bengali elements with contemporary
              fashion sensibilities.
            </p>
            <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
              Whether you're seeking guidance for special occasions or looking
              to incorporate Bengali design elements into your everyday
              wardrobe, our styling services are tailored to your individual
              needs. We focus on creating versatile looks that honor your
              personal style while celebrating the rich textile heritage of
              Bengal.
            </p>
            <Link to="/styling-consultancy" className="btn">
              Begin Your Style Journey
            </Link>
          </motion.div>
        </div>
      </div>
      <ServiceGrid services={stylingServices} />
    </section>
  );
};

export default StylingSection;
