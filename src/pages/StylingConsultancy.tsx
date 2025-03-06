import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';

type ConsultationForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
};

const StylingConsultancy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationForm>();

  const onSubmit = (data: ConsultationForm) => {
    console.log(data);    // Handle form submission
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3"
          alt="Styling Consultancy"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Styling Consultancy
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover your unique style identity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 mandala-bg mandala-bg-small mandala-bg-rotate">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personal Styling</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tailored styling solutions that align with your personality and lifestyle.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Style Assessment</li>
                <li>• Wardrobe Audit</li>
                <li>• Personal Shopping</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Event Styling</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Make a statement at your next special occasion.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Wedding Styling</li>
                <li>• Red Carpet Events</li>
                <li>• Photo Shoots</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Corporate Styling</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build a powerful professional image.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Professional Image Consulting</li>
                <li>• Corporate Workshops</li>
                <li>• Team Styling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 mandala-bg mandala-bg-large"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Book a Consultation
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Valid email is required
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">Phone is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                {...register('date', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.date && (
                <span className="text-red-500 text-sm">Date is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full btn"
            >
              Book Consultation
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default StylingConsultancy;