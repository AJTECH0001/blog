import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Post: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This is the full content of the blog post... (Fetch content based on slug)
      </p>
    </motion.div>
  );
};

export default BlogPost;