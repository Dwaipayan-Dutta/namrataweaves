import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VideoComponent from "../VideoComponent";
import { Ref } from "react";

interface HeroSectionProps {
  heroRef: Ref<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroControls: any; // Adjust this type if you have a specific type for animation controls
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroRef, heroControls }) => {
  return (
    <section ref={heroRef} id="home" className="relative h-screen">
      <VideoComponent />
      <div className="absolute inset-0 bg-woodblack" />
      <div className="absolute inset-0 flex items-center justify-center text-offwhite">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroControls}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold mb-6 tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Crafting Bengali Heritage
          </h1>
          <p className="text-xl md:text-2xl font-garamond max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Step into a world where centuries-old Bengali craftsmanship meets
            contemporary design. Our atelier celebrates the intricate artistry
            of traditional textile-making while reimagining it for the modern
            connoisseur of fine crafts and culture.
          </p>
          <Link to="/about" className="btn">
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
