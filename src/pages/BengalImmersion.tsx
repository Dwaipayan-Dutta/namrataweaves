import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    title: 'Artisan Workshops',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3',
    description: 'Learn directly from master craftsmen in their traditional workshops.',
  },
  {
    id: 2,
    title: 'Cultural Tours',
    image: 'https://images.unsplash.com/photo-1558432855-6dafa2552204?ixlib=rb-4.0.3',
    description: 'Explore the rich heritage of Bengal through guided cultural tours.',
  },
  {
    id: 3,
    title: 'Textile Journey',
    image: 'https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.0.3',
    description: 'Discover the intricate world of Bengali textiles and weaving traditions.',
  },
];

const BengalImmersion = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/517090081.hd.mp4?s=0a48351b9a869365a8ee5cc6f5f5f52876b93c80&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bengal Immersion
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Experience the heart and soul of Bengali culture
            </p>
            <button className="btn">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experience Showcase */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 mandala-bg mandala-bg-large mandala-bg-rotate"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Immersive Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-white/80">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Journey Steps */}
      <section className="bg-amber-50 dark:bg-gray-800 py-20 px-4 md:px-8 mandala-bg mandala-bg-small">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery Call</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We learn about your interests and customize your experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We create your personalized immersion itinerary
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Immerse yourself in Bengali culture and traditions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Reflection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Take home memories and insights that last a lifetime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BengalImmersion;