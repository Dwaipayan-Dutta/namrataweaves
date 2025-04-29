import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const articles = [
  {
    id: 1,
    title: 'The Art of Bengali Weaving',
    image: 'https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.0.3',
    category: 'Craft',
    date: 'March 15, 2024',
    excerpt:
      'Exploring the intricate techniques and rich history of traditional Bengali weaving.',
  },
  {
    id: 2,
    title: 'Sustainable Fashion in Modern Bengal',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3',
    category: 'Fashion',
    date: 'March 10, 2024',
    excerpt:
      'How contemporary designers are incorporating sustainability into Bengali fashion.',
  },
  {
    id: 3,
    title: 'Cultural Exchange Through Design',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3',
    category: 'Culture',
    date: 'March 5, 2024',
    excerpt:
      'The impact of cross-cultural collaboration on modern Bengali design.',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.0.3"
          alt="Traditional Bengali Art"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Bridging traditions with contemporary design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 mandala-bg mandala-bg-large"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1604014137754-179bb6d3d62a?ixlib=rb-4.0.3"
                alt="Artisan at work"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in the heart of Bengal, NW began as a dream to preserve and
                  reimagine traditional craftsmanship for the modern world. Our journey
                  started with a simple belief: that the stories woven into Bengal's
                  rich textile heritage deserve to be told and celebrated.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we stand as a bridge between artisanal excellence and
                  contemporary design, creating pieces that honor tradition while
                  embracing innovation. Each creation tells a story of cultural
                  heritage, artistic vision, and sustainable craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Impact Stats */}
      <section className="py-20 px-4 md:px-8 bg-amber-50 dark:bg-gray-800 mandala-bg mandala-bg-small mandala-bg-rotate-reverse">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
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

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8 mandala-bg mandala-bg-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Preserve</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Safeguarding Bengal's rich cultural heritage through documentation
                and celebration of traditional craftsmanship.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovate</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bringing traditional techniques into the modern era through
                thoughtful design and contemporary applications.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Empower</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Supporting artisan communities through fair partnerships and
                sustainable business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 mandala-bg mandala-bg-right mandala-bg-small">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Voices of Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Working with NW has transformed our community. They've helped
                preserve our traditional crafts while creating sustainable
                livelihoods for our artisans."
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
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
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
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
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
      </section>

      {/* Journal Section */}
      <section className="py-20 px-4 md:px-8 mandala-bg mandala-bg-large mandala-bg-rotate">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-amber-600 text-white px-3 py-1 text-sm font-semibold rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;