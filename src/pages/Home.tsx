import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import VideoComponent from "../components/VideoComponent";
import ServiceGrid from "../components/Home/ServiceGrid";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface SubService {
  title: string;
  description: string;
  image: string;
}

interface Service {
  id: string; // Added the id property
  title: string;
  description: string;
  image: string;
  subServices?: SubService[];
}

// Updated sub-services with 6 items each
const designStudioSubServices: SubService[] = [
  {
    title: "Saree Innovation",
    description: "Reimagining traditional Bengali sarees with contemporary design elements and sustainable materials.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3",
  },
  {
    title: "Textile Research",
    description: "Exploring ancient Bengali weaving techniques and patterns to incorporate into modern designs.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3",
  },
  {
    title: "Artisan Collaboration",
    description: "Working directly with master craftspeople to preserve authentic techniques while creating fresh designs.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3",
  },
  {
    title: "Limited Editions",
    description: "Exclusive collections that showcase the finest of Bengali craftsmanship with modern sensibilities.",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3",
  },
  {
    title: "Motif Development",
    description: "Creating contemporary interpretations of traditional Bengali motifs that tell stories of cultural heritage.",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3",
  },
  {
    title: "Bespoke Services",
    description: "Customized design solutions for clients seeking unique Bengali textile creations for special occasions.",
    image: "https://images.unsplash.com/photo-1520006403909-838c6555f04e?ixlib=rb-4.0.3",
  }
];

const stylingSubServices: SubService[] = [
  {
    title: "Cultural Styling",
    description: "Integrating Bengali textile traditions into contemporary wardrobes for everyday elegance.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
  },
  {
    title: "Event Curation",
    description: "Complete styling services for special occasions that honor Bengali heritage with modern flair.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3",
  },
  {
    title: "Style Workshops",
    description: "Learn the art of styling Bengali textiles through hands-on sessions with our expert consultants.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3",
  },
  {
    title: "Sustainable Styling",
    description: "Eco-conscious styling advice that emphasizes longevity, versatility, and ethical fashion choices.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3",
  },
  {
    title: "Accessory Pairing",
    description: "Expert guidance on selecting and styling traditional Bengali jewelry and accessories with modern outfits.",
    image: "https://images.unsplash.com/photo-1576053139778-5f394bb378fe?ixlib=rb-4.0.3",
  },
  {
    title: "Color Analysis",
    description: "Personalized color palette recommendations that complement your complexion and honor Bengali color traditions.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3",
  }
];

const bengalImmersionSubServices: SubService[] = [
  {
    title: "Weaving Masterclass",
    description: "Hands-on experience with traditional Bengali looms under the guidance of master weavers.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
  },
  {
    title: "Natural Dye Workshop",
    description: "Learn the ancient art of creating vibrant colors from natural materials found in Bengal.",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-4.0.3",
  },
  {
    title: "Textile History Tour",
    description: "Journey through historic textile centers in Bengal to witness living traditions firsthand.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3",
  },
  {
    title: "Artisan Home Stay",
    description: "Immersive experiences living with craftspeople to understand their techniques and daily lives.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3",
  },
  {
    title: "Cultural Cuisine Experience",
    description: "Explore the connection between Bengal's textile traditions and its rich culinary heritage.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
  },
  {
    title: "Textile Documentation",
    description: "Learn to record and preserve Bengali textile traditions through photography and storytelling workshops.",
    image: "https://images.unsplash.com/photo-1495091349533-8d77bce702bc?ixlib=rb-4.0.3",
  }
];

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "The Heritage Saree Collection",
    description:
      "Each thread tells a story of Bengal's rich textile heritage. Our signature collection features hand-woven masterpieces that blend traditional motifs with contemporary elegance.",
    image:
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3",
    link: "/design-studio",
  },
  {
    id: 2,
    title: "Personal Style Journey",
    description:
      "Transform your wardrobe with our bespoke styling service. We help you discover your unique style identity while incorporating elements of Bengali culture.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    link: "/styling-consultancy",
  },
  {
    id: 3,
    title: "Artisan Workshop Experience",
    description:
      "Immerse yourself in the world of Bengali craftsmanship. Learn directly from master artisans in their traditional workshops.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3",
    link: "/bengal-immersion",
  },
];

// Updated services with sub-services and ids
const designStudioServices: Service[] = [
  {
    id: "custom-saree-design",
    title: "Custom Saree Design",
    description:
      "Collaborate with our artisans to create your own unique saree design, incorporating traditional Bengali motifs and contemporary elements.",
    image:
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3",
    subServices: designStudioSubServices,
  },
  {
    id: "heritage-restoration",
    title: "Heritage Restoration",
    description:
      "Expert restoration services for vintage Bengali textiles, preserving their historical significance while making them wearable for future generations.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3",
    subServices: designStudioSubServices,
  },
  {
    id: "modern-collections",
    title: "Modern Collections",
    description:
      "Ready-to-wear collections that blend traditional Bengali craftsmanship with contemporary silhouettes and design sensibilities.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3",
    subServices: designStudioSubServices,
  },
];

const stylingServices: Service[] = [
  {
    id: "personal-style-consultation",
    title: "Personal Style Consultation",
    description:
      "One-on-one sessions with our style experts to develop your personal aesthetic while incorporating Bengali design elements.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
  {
    id: "wardrobe-curation",
    title: "Wardrobe Curation",
    description:
      "Professional curation services to build a versatile wardrobe that bridges traditional Bengali style with contemporary fashion.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
  {
    id: "occasion-styling",
    title: "Occasion Styling",
    description:
      "Expert styling advice for special events, ensuring you embody Bengali elegance while maintaining your personal style.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
];

const bengalImmersionServices: Service[] = [
  {
    id: "artisan-workshops",
    title: "Artisan Workshops",
    description:
      "Hands-on workshops with master craftsmen, learning traditional Bengali textile techniques and patterns.",
    image:
      "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
    subServices: bengalImmersionSubServices,
  },
  {
    id: "heritage-tours",
    title: "Heritage Tours",
    description:
      "Curated tours of historic textile villages and workshops, experiencing the living tradition of Bengali craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
    subServices: bengalImmersionSubServices,
  },
  {
    id: "cultural-programs",
    title: "Cultural Programs",
    description:
      "Immersive experiences showcasing Bengali art, music, and textile traditions through interactive sessions and demonstrations.",
    image:
      "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
    subServices: bengalImmersionSubServices,
  },
];

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
    threshold: 0.1, // Lower threshold for more reliable triggering
    rootMargin: "-50px",
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const [studioRef, studioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const [stylingRef, stylingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const [bengalRef, bengalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      {/* Hero Section */}
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

      {/* Design Studio Section */}
      <section
        ref={studioRef}
        id="design-studio"
        className="py-24 bg-woodbrown-100/30 mandala-bg mandala-bg-right mandala-bg-small"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={studioControls}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Design Studio</h2>
              <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
                Welcome to our design sanctuary, where heritage meets
                innovation. In this creative space, master artisans work
                alongside contemporary designers to create pieces that honor
                Bengal's textile legacy. Our studio is a living testament to the
                evolution of traditional craftsmanship, where centuries-old
                techniques find new expression in modern design language.
              </p>
              <p className="text-lg text-woodblack/80 mb-8 leading-relaxed">
                Each creation emerging from our studio tells a story of cultural
                preservation and artistic innovation. We specialize in reviving
                ancient weaving techniques, natural dyeing processes, and
                intricate embroidery patterns, while incorporating sustainable
                practices and contemporary design elements that speak to today's
                aesthetic sensibilities.
              </p>
              <Link to="/design-studio" className="btn">
                View Our Collections
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={studioControls}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] group"
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

      {/* Styling Section */}
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

      {/* Bengal Immersion Section */}
      <section
        ref={bengalRef}
        id="bengal"
        className="py-24 bg-woodbrown-100/30 mandala-bg mandala-bg-right mandala-bg-small"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuredControls}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="section-title">Our Signature Offerings</h2>
              <p className="text-lg md:text-xl font-garamond max-w-3xl mx-auto mb-8 leading-relaxed">
                Experience the richness of Bengali heritage through our
                thoughtfully curated collections and immersive experiences. Each
                offering is a gateway to centuries of artistic tradition,
                reimagined for contemporary appreciation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuredControls}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative h-96 mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-woodblack/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-cormorant font-bold mb-3">
                    {product.title}
                  </h3>
                  <p className="font-garamond text-woodblack/80 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Link to={product.link} className="btn-outline">
                    Explore More
                  </Link>
                </motion.div>
              ))}
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
