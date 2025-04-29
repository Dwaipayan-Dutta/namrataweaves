import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FeaturedSection = () => {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const featuredControls = useAnimation();

  useEffect(() => {
    if (featuredInView) featuredControls.start({ opacity: 1, y: 0 });
  }, [featuredInView, featuredControls]);

  return (
    <motion.div
      ref={featuredRef}
      initial={{ opacity: 0, y: 20 }}
      animate={featuredControls}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 mx-12"
    >
      <div className="text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 bg-woodbrown-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
            </svg>
          </div>
        </div>
        <h3 className="font-cormorant text-2xl font-bold mb-4">
          Personal Styling
        </h3>
        <p className="font-garamond text-woodblack/80">
          Our consultants craft individualized style profiles that honor your personality while integrating Bengali fashion elements into your unique wardrobe expression.
        </p>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 bg-woodbrown-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
          </div>
        </div>
        <h3 className="font-cormorant text-2xl font-bold mb-4">
          Cultural Storytelling
        </h3>
        <p className="font-garamond text-woodblack/80">
          We believe your style narrates your story. Our expertise helps you weave Bengali design traditions into contemporary fashion that authentically represents your cultural connection.
        </p>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 bg-woodbrown-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </div>
        <h3 className="font-cormorant text-2xl font-bold mb-4">
          Occasion Expertise
        </h3>
        <p className="font-garamond text-woodblack/80">
          From everyday elegance to special celebrations, we guide you through selecting Bengali-inspired attire that honors traditions while expressing your individual style journey.
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturedSection;