import { motion, AnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceGrid from "./ServiceGrid";
import { Ref } from "react";

interface BengalImmersionSectionProps {
  bengalRef: Ref<HTMLElement>;
  bengalControls: AnimationControls;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bengalImmersionServices: any[]; // Adjust type based on actual structure
}

const BengalImmersionSection: React.FC<BengalImmersionSectionProps> = ({ bengalRef, bengalControls, bengalImmersionServices }) => {
  return (
    <section
      ref={bengalRef}
      id="bengal"
      className="py-16 bg-woodbrown-500 mandala-bg mandala-bg-right mandala-bg-small"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={bengalControls}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Bengal Immersion</h2>
            <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
              Journey into the heart of Bengali craftsmanship through our
              immersive cultural experiences. Our carefully curated programs
              take you beyond the surface, connecting you with master
              artisans, ancient traditions, and the vibrant culture that
              inspires our work. Each program is thoughtfully designed to
              create meaningful connections and lasting memories.
            </p>
            <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
              From textile workshops in historic weaving villages to natural
              dyeing sessions with traditional craftspeople, each experience
              is designed to deepen your understanding and appreciation of
              Bengali craftsmanship. Participate in the creation process,
              learn ancestral techniques, and become part of the continuing
              story of Bengal's artistic legacy.
            </p>
            <Link to="/bengal-immersion" className="btn">
              Explore Experiences
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={bengalControls}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] group"
          >
            <img
              src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3"
              alt="Bengal Immersion"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-woodblack/20 group-hover:bg-woodblack/40 transition-colors duration-500" />
          </motion.div>
        </div>
      </div>
      <ServiceGrid services={bengalImmersionServices} />
    </section>
  );
};

export default BengalImmersionSection;
