
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'news' | 'notification' | 'event';
  isNew?: boolean;
  isFeatured?: boolean;
  image?: string;
};

const LatestNewsSection = ({newsItems}:{newsItems:any[]}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'news' | 'notifications' | 'events'>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data with enhancements
  

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = newsItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'news') return item.category === 'news';
    if (activeTab === 'notifications') return item.category === 'notification';
    if (activeTab === 'events') return item.category === 'event';
    return true;
  });

  const featuredItem = newsItems.find(item => item.isFeatured);

  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Latest <span className="text-primary-600">News & Updates</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Stay informed with the latest happenings at our institution
          </p>
        </motion.div>

        {/* Tab Navigation with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex rounded-lg bg-gray-100 p-1 shadow-inner">
            {[
              { id: 'all', label: 'All Updates' },
              { id: 'news', label: 'News' },
              { id: 'notifications', label: 'Notifications' },
              { id: 'events', label: 'Events' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white shadow-sm text-primary-600'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Card (Desktop only) */}
        {activeTab === 'all' && featuredItem && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block mb-12"
          >
            <FeaturedNewsCard item={featuredItem} />
          </motion.div>
        )}

        {/* News Cards Container */}
        <div className="relative">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredItems.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        
      </div>
    </section>
  );
};

const FeaturedNewsCard = ({ item }: { item: NewsItem }) => {
  const categoryColors = {
    news: 'bg-blue-100 text-blue-800',
    notification: 'bg-yellow-100 text-yellow-800',
    event: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="relative group">
      <div className="relative h-full bg-white overflow-hidden shadow-xl rounded-xl transition-all duration-500 group-hover:shadow-2xl">
        {/* Background Image */}
        {item.image && (
          <div className="h-48 bg-gray-200 overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        )}
        
        {/* Content */}
        <div className="px-8 py-6">
          <div className="flex items-center mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                categoryColors[item.category]
              }`}
            >
              {item.category === 'notification' ? 'Notification' : item.category}
            </span>
            <span className="ml-3 text-sm text-gray-500">{item.date}</span>
          </div>

          <Link href={`/news/${item.slug}`} className="block mt-2">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="mt-4 text-lg text-gray-600">{item.excerpt}</p>
          </Link>

          <div className="mt-6">
            <Link
              href={`/news/${item.slug}`}
              className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-800 transition-colors duration-300"
            >
              Read full story
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ item }: { item: NewsItem }) => {
  const categoryColors = {
    news: 'bg-blue-100 text-blue-800',
    notification: 'bg-yellow-100 text-yellow-800',
    event: 'bg-purple-100 text-purple-800',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative group"
    >
      <div className="relative h-full bg-white overflow-hidden shadow-lg rounded-xl transition-all duration-300 group-hover:shadow-xl">
        {/* Image Placeholder */}
        {item.image && (
          <div className="h-40 bg-gray-200 overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        )}
        
        {/* Content */}
        <div className="px-6 py-5">
          <div className="flex items-center mb-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                categoryColors[item.category]
              }`}
            >
              {item.category === 'notification' ? 'Notification' : item.category}
            </span>
            <span className="ml-2 text-sm text-gray-500">{item.date}</span>
          </div>

          <Link href={`/news/${item.slug}`} className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="mt-3 text-base text-gray-600 line-clamp-2">{item.excerpt}</p>
          </Link>

          <div className="mt-4">
            <Link
              href={`/news/${item.slug}`}
              className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-colors duration-300"
              aria-label={`Read more about ${item.title}`}
            >
              Read more
              <svg
                className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* New Badge */}
        {item.isNew && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            NEW
          </div>
        )}
      </div>
    </motion.div>
  );
};

const NewsCardSkeleton = () => {
  return (
    <div className="relative h-full bg-white overflow-hidden shadow-lg rounded-xl">
      <div className="animate-pulse">
        <div className="h-40 bg-gray-200"></div>
        <div className="px-6 py-5">
          <div className="flex items-center mb-3">
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="ml-2 h-4 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="h-5 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="mt-4 h-4 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;