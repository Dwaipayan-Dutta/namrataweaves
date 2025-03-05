import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3"
          alt="Impact"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Impact</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Creating positive change through art and culture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 md:px-8 bg-amber-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-amber-600 mb-2">100+</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Artisans Supported
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amber-600 mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cultural Programs
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amber-600 mb-2">1000+</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lives Impacted
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-amber-600 mb-2">25+</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Partner Organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Voices of Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Working with NW has transformed our community. They've helped
                preserve our traditional crafts while creating sustainable
                liveli hoods for our artisans."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-gray-500">Master Weaver</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "NW's commitment to cultural preservation goes beyond business.
                They're truly invested in the well-being of our artisan
                communities."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-gray-500">Community Leader</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "The cultural exchange programs have opened new horizons for our
                youth, connecting them with their heritage in meaningful ways."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Maya Banerjee</h4>
                  <p className="text-gray-500">Education Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partners */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Partner 1
              </span>
            </div>
            <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Partner 2
              </span>
            </div>
            <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Partner 3
              </span>
            </div>
            <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-700 rounded-lg">
              <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Partner 4
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;