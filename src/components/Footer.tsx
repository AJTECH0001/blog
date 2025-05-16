const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-white"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            className="text-gray-300 hover:text-white"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;