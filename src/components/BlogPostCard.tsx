import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
        <Link
          to={`/post/${post.slug}`}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          aria-label={`Read more about ${post.title}`}
        >
          Read more
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;