import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import DesignStudioSection from "../components/Home/DesignStudioSection";
import StylingSection from "../components/Home/StylingSection";

// import ServiceGrid from "../components/Home/ServiceGrid";
import {
  // bengalImmersionServices,
  designStudioServices,
  stylingServices,
  // featuredProducts,
} from "../data/services";
import ScrollVelocityMarquee from "../components/ScrollVelocityMarquee";
import ExperiencePlans from "../components/ExperiencePlans";

const Home = () => {
  // Use animation controls for more reliable animations
  const heroControls = useAnimation();
  const aboutControls = useAnimation();
  const featuredControls = useAnimation();
  const studioControls = useAnimation();
  const stylingControls = useAnimation();
  const bengalControls = useAnimation();
  const contactControls = useAnimation();

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Lower threshold for more reliable triggering
    rootMargin: "-50px",
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const [studioRef, studioInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const [stylingRef, stylingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const [bengalRef, bengalInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  // Effect hooks to trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) heroControls.start({ opacity: 1, y: 0 });
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (aboutInView) {
      console.log("About section is now in view");
      aboutControls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [aboutInView, aboutControls]);

  useEffect(() => {
    if (featuredInView) featuredControls.start({ opacity: 1, y: 0 });
  }, [featuredInView, featuredControls]);

  useEffect(() => {
    if (studioInView) studioControls.start({ opacity: 1, x: 0 });
  }, [studioInView, studioControls]);

  useEffect(() => {
    if (stylingInView) stylingControls.start({ opacity: 1, x: 0 });
  }, [stylingInView, stylingControls]);

  useEffect(() => {
    if (bengalInView) bengalControls.start({ opacity: 1, x: 0 });
  }, [bengalInView, bengalControls]);

  useEffect(() => {
    if (contactInView) contactControls.start({ opacity: 1, y: 0 });
  }, [contactInView, contactControls]);

  return (
    <div className="min-h-screen bg-offwhite">
      <HeroSection heroRef={heroRef} heroControls={heroControls} />
      {/* Bengal Immersion Section */}
      <section
        ref={bengalRef}
        id="bengal"
        className="pt-24 bg-stone-700/60 mandala-bg mandala-bg-right mandala-bg-small"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                inspires our work. From textile workshops in historic weaving
                villages to natural dyeing sessions with traditional
                craftspeople, each experience is designed to deepen your
                understanding and appreciation of Bengali craftsmanship.
                Participate in the creation process, learn ancestral techniques,
                and become part of the continuing story of Bengal's artistic
                legacy.
              </p>
              <Link to="/bengal-immersion" className="btn">
                Explore Experiences
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={bengalControls}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] md:h-[400px] lg:h-[450px] group"
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
        <ScrollVelocityMarquee />
      </section>

      <ExperiencePlans />

      <DesignStudioSection
        studioRef={studioRef}
        studioControls={studioControls}
        designStudioServices={designStudioServices}
      />

      <StylingSection
        stylingRef={stylingRef}
        stylingControls={stylingControls}
        stylingServices={stylingServices}
      />

      {/* About NW Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-24 px-4 md:px-8 relative overflow-hidden"
        style={{ zIndex: 1 }} // Ensure proper stacking
      >
        <div className="absolute inset-0 opacity-10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutControls}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[700px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3"
                  alt="Namrata - Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-woodblack/20" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-woodbrown-100/80 backdrop-blur-sm p-8 max-w-sm">
                <p className="font-cormorant text-lg italic text-woodblack">
                  "My journey began with a simple desire: to bridge the gap
                  between Bengal's timeless artistry and contemporary design
                  sensibilities."
                </p>
                <p className="font-garamond mt-4 text-woodblack/80">
                  - Namrata, Founder
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutControls}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">The Story of NW</h2>
              <div className="space-y-6 text-lg text-woodblack/80">
                <p className="font-garamond leading-relaxed">
                  Born into a family of textile enthusiasts in Kolkata,
                  Namrata's earliest memories are woven with the rich tapestry
                  of Bengali craftsmanship. Growing up surrounded by the
                  rhythmic sounds of looms and the vibrant colors of natural
                  dyes, she developed a deep appreciation for the artistry that
                  has been passed down through generations.
                </p>
                <p className="font-garamond leading-relaxed">
                  After studying textile design in London and working with
                  renowned fashion houses, Namrata returned to her roots with a
                  vision. She founded NW in 2020, not just as a design studio,
                  but as a bridge between centuries-old traditions and modern
                  aesthetics.
                </p>
                <p className="font-garamond leading-relaxed">
                  Today, NW stands as a testament to her commitment to
                  preserving and reimagining Bengali craftsmanship. Through
                  thoughtfully curated collections, personalized styling
                  services, and immersive cultural experiences, we invite you to
                  be part of this continuing legacy.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, y: 20 }}
            animate={aboutControls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
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
                    <path d="M6 3h12l4 6-10 13L2 9Z" />
                    <path d="M11 3 8 9l4 13 4-13-3-6" />
                    <path d="M2 9h20" />
                  </svg>
                </div>
              </div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Our Heritage
              </h3>
              <p className="font-garamond text-woodblack/80">
                Rooted in Bengal's rich textile tradition, we honor centuries of
                craftsmanship while embracing innovation in design and
                technique.
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
                    <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Our Vision
              </h3>
              <p className="font-garamond text-woodblack/80">
                Creating a future where traditional artistry thrives alongside
                contemporary design, fostering cultural appreciation and
                sustainable practices.
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Our Promise
              </h3>
              <p className="font-garamond text-woodblack/80">
                Every piece we create, every experience we curate, carries
                forward the legacy of Bengali craftsmanship with authenticity
                and respect.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-24 px-4 md:px-8 mandala-bg mandala-bg-large"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactControls}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-6">Begin Your Journey With Us</h2>
            <p className="text-lg md:text-xl font-garamond max-w-3xl mx-auto mb-8 leading-relaxed">
              Every masterpiece begins with a conversation. Whether you're drawn
              to our heritage collections, seeking personalized styling
              guidance, or eager to immerse yourself in Bengali craft
              traditions, we're here to guide your journey. Let's create
              something extraordinary together that honors both tradition and
              your unique vision.
            </p>
            <Link to="/contact" className="btn">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
