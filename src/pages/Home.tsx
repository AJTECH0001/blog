import { motion } from 'framer-motion';
import BlogPostCard from '../components/BlogPostCard';
import type { BlogPost } from '../types';

// Sample data (replace with API or Markdown)
const posts: BlogPost[] = [
  {
    id: 1,
    title: 'My First Blog Post',
    excerpt: 'A short summary of my first blog post...',
    date: 'May 16, 2025',
    slug: 'first-post',
  },
  {
    id: 2,
    title: 'Another Post',
    excerpt: 'A brief overview of another topic...',
    date: 'May 10, 2025',
    slug: 'another-post',
  },
   {
    id: 2,
    title: 'Another Post',
    excerpt: 'A brief overview of another topic...',
    date: 'May 10, 2025',
    slug: 'another-post',
  },
   {
    id: 2,
    title: 'Another Post',
    excerpt: 'A brief overview of another topic...',
    date: 'May 10, 2025',
    slug: 'another-post',
  },
];

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
      >
        Welcome to My Blog
      </motion.h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;