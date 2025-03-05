import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Region = 'all' | 'indian' | 'caribbean' | 'spanish';

const designs = [
  {
    id: 1,
    title: 'Bengali Heritage Collection',
    image: 'https://images.unsplash.com/photo-1582738412674-c7f179d59f8d?ixlib=rb-4.0.3',
    region: 'indian',
    description: 'Traditional motifs reimagined for modern spaces',
  },
  {
    id: 2,
    title: 'Caribbean Fusion',
    image: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3',
    region: 'caribbean',
    description: 'Vibrant patterns inspired by island life',
  },
  {
    id: 3,
    title: 'Spanish Influences',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3',
    region: 'spanish',
    description: 'Mediterranean aesthetics meet Bengali craftsmanship',
  },
  {
    id: 4,
    title: 'Modern Bengali',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3',
    region: 'indian',
    description: 'Contemporary takes on traditional designs',
  },
  {
    id: 5,
    title: 'Havana Nights',
    image: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3',
    region: 'caribbean',
    description: 'Tropical motifs with a Bengali twist',
  },
  {
    id: 6,
    title: 'Andalusian Dreams',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3',
    region: 'spanish',
    description: 'Moorish patterns meet Bengali textiles',
  },
];

const DesignStudio = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredDesigns = designs.filter(
    design => selectedRegion === 'all' || design.region === selectedRegion
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3"
          alt="Design Studio"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Design Studio</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Where tradition meets contemporary design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 md:px-8 mandala-bg mandala-bg-large mandala-bg-rotate">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-6 py-2 rounded-full ${
                selectedRegion === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedRegion('indian')}
              className={`px-6 py-2 rounded-full ${
                selectedRegion === 'indian'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              Indian
            </button>
            <button
              onClick={() => setSelectedRegion('caribbean')}
              className={`px-6 py-2 rounded-full ${
                selectedRegion === 'caribbean'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              Caribbean
            </button>
            <button
              onClick={() => setSelectedRegion('spanish')}
              className={`px-6 py-2 rounded-full ${
                selectedRegion === 'spanish'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              Spanish
            </button>
          </div>

          {/* Gallery Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {design.title}
                    </h3>
                    <p className="text-white/80">{design.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DesignStudio;