import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Hi, I'm [Your Name]. This is my personal blog where I share thoughts on technology, coding,
        and more.
      </p>
    </motion.div>
  );
};

export default About;