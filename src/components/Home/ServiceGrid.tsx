import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Service } from "../../types";

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  // Set the first service as expanded by default
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  // Progress state for the loading bar
  const [progress, setProgress] = useState<number>(0);

  // Duration of auto-cycle in milliseconds
  const cycleDuration = 5000;

  // Throttled function to prevent excessive rerenders
  const throttledSetExpandedIndex = useCallback((index: number) => {
    setExpandedIndex(index);
    setProgress(0); // Reset progress when changing service
  }, []);

  // Auto-cycling functionality with progress tracking
  useEffect(() => {
    if (services.length > 1 && inView) {
      // Progress bar update interval (update every 100ms for smoothness)
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (cycleDuration / 100);
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 100);

      // Only change service when progress reaches exactly 100%
      const checkProgressInterval = setInterval(() => {
        if (progress >= 99.9) {
          throttledSetExpandedIndex((expandedIndex + 1) % services.length);
        }
      }, 50);

      return () => {
        clearInterval(progressInterval);
        clearInterval(checkProgressInterval);
      };
    }
  }, [
    expandedIndex,
    services.length,
    inView,
    throttledSetExpandedIndex,
    progress,
  ]);

  // Toggle expanded state - also resets the auto-cycle timer
  const toggleExpand = useCallback(
    (index: number) => {
      if (index !== expandedIndex) {
        throttledSetExpandedIndex(index);
      }
    },
    [expandedIndex, throttledSetExpandedIndex]
  );

  // Memoize the service card animations to prevent unnecessary recalculations
  const serviceCardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  // Memoize the sub-service card animations
  const subServiceVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: index * 0.08,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-5">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={`service-${service.id}`}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={serviceCardVariants}
            className="space-y-6 will-change-transform"
          >
            <div
              className={`group cursor-pointer border-2 rounded-lg p-1 transition-all duration-300 ${
                expandedIndex === index
                  ? "border-woodbrown-100 shadow-md"
                  : "border-transparent hover:border-woodbrown-100/50"
              }`}
              onClick={() => toggleExpand(index)}
            >
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                {/* Using native lazy loading for images */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-woodblack/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex justify-between items-center px-2 mb-2">
                <h3 className="text-xl font-cormorant font-bold mb-2">
                  {service.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <p className="font-garamond text-woodblack/80 leading-relaxed min-h-16 px-2 mb-3">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Loading Progress Bar */}
      <div className="w-3/4 mx-auto h-1 bg-gray-300 rounded-full overflow-hidden my-6">
        <motion.div
          className="h-full bg-woodbrown-300"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Sub-services section with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {services[expandedIndex]?.subServices && (
          <motion.div
            key={`sub-services-${services[expandedIndex].id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-4 border-t border-woodbrown-100/30"
          >
            {/* <div className="flex justify-between items-center mb-8">
              <h4 className="text-2xl font-cormorant font-semibold">
                {services[expandedIndex].title} Services
              </h4>
              <a
                href={`/services#${services[expandedIndex].id}`}
                className="px-4 py-2 bg-woodbrown-100 text-white rounded hover:bg-woodbrown-200 transition-colors duration-300 font-medium"
              >
                View All
              </a>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services[expandedIndex].subServices
                .slice(0, 6)
                .map((subService, subIndex) => (
                  <motion.div
                    key={`${services[expandedIndex].id}-sub-${subIndex}`}
                    custom={subIndex}
                    initial="hidden"
                    animate="visible"
                    variants={subServiceVariants}
                    className="bg-stone-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-white will-change-transform"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={subService.image}
                        alt={subService.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="font-cormorant font-bold text-xl mb-4">
                        {subService.title}
                      </h5>
                      <p className="font-garamond text-base text-white/80 min-h-24 mb-4">
                        {subService.description}
                      </p>
                      <button
                        className="w-full py-3 bg-woodbrown-100 text-black rounded hover:bg-woodbrown-200 transition-colors duration-300 font-medium mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add your buy functionality here
                          console.log(`Buy ${subService.title}`);
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className="flex justify-center items-center">
              <a
                href={`/services#${services[expandedIndex].id}`}
                className="px-10 py-2 mt-7 bg-woodbrown-100 text-woodbrown-700 rounded hover:bg-woodbrown-200 transition-colors duration-300 font-medium"
              >
                View All
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceGrid;
