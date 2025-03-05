import React from 'react';
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
  {
    id: 4,
    title: 'Preserving Traditional Craftsmanship',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3',
    category: 'Heritage',
    date: 'March 1, 2024',
    excerpt:
      'Initiatives and programs helping to preserve Bengals craft heritage.',
  },
  {
    id: 5,
    title: 'The Future of Bengali Fashion',
    image: 'https://images.unsplash.com/photo-1558432855-6dafa2552204?ixlib=rb-4.0.3',
    category: 'Trends',
    date: 'February 25, 2024',
    excerpt:
      'Emerging trends and innovations in contemporary Bengali fashion.',
  },
];

const Journal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Featured Article */}
      <section className="relative h-[60vh] bg-gray-900">
        <img
          src={articles[0].image}
          alt={articles[0].title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl px-4"
          >
            <span className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full mb-4">
              Featured
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {articles[0].title}
            </h1>
            <p className="text-xl mb-6">{articles[0].excerpt}</p>
            <button className="btn">Read More</button>
          </motion.div>
        </div>
      </section>

      {/* Article Grid */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
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
                    <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-amber-600 font-semibold hover:text-amber-700">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Journal;