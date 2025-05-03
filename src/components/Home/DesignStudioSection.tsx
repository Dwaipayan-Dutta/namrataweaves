/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceGrid from "./ServiceGrid";
import { Ref } from "react";

interface DesignStudioSectionProps {
  studioRef: Ref<HTMLElement>;
  studioControls: any; // Adjust this type if you have a specific type for animation controls
  designStudioServices: any[]; // Adjust this type based on actual data structure
}

const DesignStudioSection: React.FC<DesignStudioSectionProps> = ({ studioRef, studioControls, designStudioServices }) => {
  return (
    <section
      ref={studioRef}
      id="design-studio"
      className="py-24 bg-woodbrown-300/30 mandala-bg mandala-bg-right mandala-bg-small"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={studioControls}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Boutique</h2>
            <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
              Welcome to our design sanctuary, where heritage meets innovation. In this creative space, master artisans work alongside contemporary designers to create pieces that honor Bengal's textile legacy. Our studio is a living testament to the evolution of traditional craftsmanship, where centuries-old techniques find new expression in modern design language. Each creation emerging from our studio tells a story of cultural preservation and artistic innovation. We specialize in reviving ancient weaving techniques, natural dyeing processes, and intricate embroidery patterns, while incorporating sustainable practices and contemporary design elements that speak to today's aesthetic sensibilities.
            </p>
            <Link to="/design-studio" className="btn">
              View Our Collections
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={studioControls}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] lg:h-[450px] group"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3"
              alt="Design Studio"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-woodblack/20 group-hover:bg-woodblack/40 transition-colors duration-500" />
          </motion.div>
        </div>
      </div>
      <ServiceGrid services={designStudioServices} />
    </section>
  );
};

export default DesignStudioSection;
