import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
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

  // State for carousel
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Duration of auto-cycle in milliseconds
  const cycleDuration = 5000;
  // Sub-carousel cycle duration (faster than main)
  const subCycleDuration = 3000;

  // Throttled function to prevent excessive rerenders
  const throttledSetExpandedIndex = useCallback((index: number) => {
    setExpandedIndex(index);
    setProgress(0); // Reset progress when changing service
    setCurrentSlide(0); // Reset carousel position
  }, []);

  // Auto-cycling functionality with progress tracking for main carousel
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

  // Auto-cycling for sub-carousel
  useEffect(() => {
    if (inView && currentSubServices.length > getCarouselItemsPerSlide()) {
      const subCarouselInterval = setInterval(() => {
        nextSlide();
      }, subCycleDuration);

      return () => {
        clearInterval(subCarouselInterval);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, currentSlide, expandedIndex]);

  // Toggle expanded state - also resets the auto-cycle timer
  const toggleExpand = useCallback(
    (index: number) => {
      if (index !== expandedIndex) {
        throttledSetExpandedIndex(index);
      }
    },
    [expandedIndex, throttledSetExpandedIndex]
  );

  // Get number of items to show per slide based on screen size
  const getCarouselItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3; // default to desktop
  };

  // Carousel navigation functions
  const nextSlide = useCallback(() => {
    if (!services || expandedIndex >= services.length) return;
    
    const currentService = services[expandedIndex];
    if (!currentService?.subServices) return;
    
    const maxSlides = Math.ceil(currentService.subServices.length / getCarouselItemsPerSlide());
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  }, [expandedIndex, services]);

  const prevSlide = useCallback(() => {
    if (!services || expandedIndex >= services.length) return;
    
    const currentService = services[expandedIndex];
    if (!currentService?.subServices) return;
    
    const maxSlides = Math.ceil(currentService.subServices.length / getCarouselItemsPerSlide());
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  }, [expandedIndex, services]);

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

  // Get the current service's subServices safely
  const currentSubServices = useMemo(() => {
    if (expandedIndex >= 0 && expandedIndex < services.length) {
      return services[expandedIndex]?.subServices || [];
    }
    return [];
  }, [expandedIndex, services]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-5">
      {/* Main service cards - updated for mobile stacking */}
      <div 
        ref={ref} 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={`service-${service.id}`}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={serviceCardVariants}
            className={`space-y-2 sm:space-y-4 md:space-y-6 will-change-transform ${
              expandedIndex === index ? "z-10" : "z-0"
            }`}
          >
            <div
              className={`group cursor-pointer border-2 rounded-lg p-1 transition-all duration-300 ${
                expandedIndex === index
                  ? "border-woodbrown-100 shadow-md"
                  : "border-transparent hover:border-woodbrown-100/50"
              }`}
              onClick={() => toggleExpand(index)}
            >
              <div className="relative h-32 sm:h-56 md:h-80 mb-2 md:mb-4 overflow-hidden rounded-lg">
                {/* Using native lazy loading for images */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-woodblack/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex justify-between items-center px-2 mb-1 md:mb-2">
                <h3 className="text-base sm:text-lg md:text-xl font-cormorant font-bold truncate">
                  {service.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              <p className="font-garamond text-woodblack/80 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3 md:min-h-16 px-2 mb-2 md:mb-3">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Loading Progress Bar */}
      <div className="w-3/4 mx-auto h-1 bg-gray-300 rounded-full overflow-hidden my-4 md:my-6">
        <motion.div
          className="h-full bg-woodbrown-300"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Sub-services carousel section with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {currentSubServices.length > 0 && (
          <motion.div
            key={`sub-services-${services[expandedIndex]?.id || expandedIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-4 border-t border-woodbrown-100/30"
          >
            {/* Carousel container */}
            <div className="relative">
              {/* Carousel navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-woodbrown-100/80 text-white p-2 rounded-full shadow-md hover:bg-woodbrown-200 transition-colors"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-woodbrown-100/80 text-white p-2 rounded-full shadow-md hover:bg-woodbrown-200 transition-colors"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              
              {/* Carousel track */}
              <div 
                ref={carouselRef}
                className="overflow-hidden"
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {/* Group items into slides - Fixed TypeScript error here */}
                  {Array.from({ 
                    length: Math.ceil(currentSubServices.length / getCarouselItemsPerSlide()) 
                  }).map((_, slideIndex) => (
                    <div 
                      key={`slide-${slideIndex}`} 
                      className="w-full flex-shrink-0 flex flex-col sm:flex-row gap-4 px-2"
                    >
                      {currentSubServices
                        .slice(
                          slideIndex * getCarouselItemsPerSlide(),
                          (slideIndex + 1) * getCarouselItemsPerSlide()
                        )
                        .map((subService, subIndex) => (
                          <motion.div
                            key={`${services[expandedIndex]?.id || 'service'}-sub-${slideIndex * getCarouselItemsPerSlide() + subIndex}`}
                            custom={subIndex}
                            initial="hidden"
                            animate="visible"
                            variants={subServiceVariants}
                            className="flex-1 bg-stone-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-white will-change-transform"
                          >
                            <div className="h-36 sm:h-48 md:h-64 overflow-hidden">
                              <img
                                src={subService.image}
                                alt={subService.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-3 md:p-6">
                              <h5 className="font-cormorant font-bold text-base md:text-xl mb-1 md:mb-4">
                                {subService.title}
                              </h5>
                              <p className="font-garamond text-xs sm:text-sm md:text-base text-white/80 line-clamp-3 sm:min-h-16 md:min-h-24 mb-1 md:mb-4">
                                {subService.description}
                              </p>
                              <button
                                className="w-full py-1 md:py-3 bg-woodbrown-100 text-black rounded hover:bg-woodbrown-200 transition-colors duration-300 font-medium mt-1 md:mt-2"
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
                  ))}
                </div>
              </div>
              
              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ 
                  length: Math.ceil(currentSubServices.length / getCarouselItemsPerSlide()) 
                }).map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-woodbrown-300' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <a
                href={`/services#${services[expandedIndex]?.id || ''}`}
                className="px-6 sm:px-8 md:px-10 py-2 mt-4 md:mt-7 bg-woodbrown-100 text-woodbrown-700 rounded hover:bg-woodbrown-200 transition-colors duration-300 font-medium"
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