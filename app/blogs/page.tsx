"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiClock, FiCalendar, FiUser, FiHeart, FiShare2, FiBookmark, FiSearch } from 'react-icons/fi';

// Mock data - in a real app, you'd fetch this from your CMS/API
const blogPosts = [
  {
    id: '1',
    slug: '5-things-you-missed-at-technova-2025',
    title: '5 Things You Missed at TechNova 2025',
    excerpt: 'Highlights from our annual tech festival with student projects and competitions',
    category: 'Campus Events',
    author: 'Cimage Media Team',
    date: '2025-03-15',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    likes: 124,
    type: 'blog'
  },
  {
    id: '2',
    slug: 'bca-placements-2025',
    title: 'BCA Placement Highlights 2025',
    excerpt: 'Record-breaking placements with top tech companies this year',
    category: 'Placements',
    author: 'Placement Cell',
    date: '2025-04-10',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    likes: 89,
    type: 'blog'
  }
];

const youtubeVideos = [
  {
    id: '1',
    slug: 'cimage-college-tour',
    title: 'Cimage College Campus Tour 2025',
    excerpt: 'Explore our state-of-the-art facilities and campus life',
    category: 'Campus',
    author: 'Cimage Media',
    date: '2025-01-15',
    duration: '8:32',
    thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    views: '24K',
    type: 'video'
  },
  {
    id: '2',
    slug: 'industry-expert-talk',
    title: 'Industry Expert Talk on AI Trends',
    excerpt: 'Mr. Rajesh Sharma from TechMahindra shares insights',
    category: 'Guest Lecture',
    author: 'Cimage Media',
    date: '2025-02-20',
    duration: '15:45',
    thumbnail: 'https://i.ytimg.com/vi/XIMLoLxmTDw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/XIMLoLxmTDw',
    views: '12K',
    type: 'video'
  }
];

const allPosts = [...blogPosts, ...youtubeVideos];

const BlogCard = ({ post }: { post: any }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <Link href={`/blogs/${post.slug}`}>
      <div className="h-48 overflow-hidden cursor-pointer">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          src={post.image} 
          alt={post.title}
        />
      </div>
    </Link>
    <div className="p-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
        {post.category}
      </span>
      <Link href={`/blogs/${post.slug}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-indigo-600 transition-colors">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <FiUser className="mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <FiCalendar className="mr-1" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <FiClock className="mr-1" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </div>
);

const VideoCard = ({ video }: { video: any }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <Link href={`/youtube/${video.slug}`}>
      <div className="relative h-48 overflow-hidden cursor-pointer">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          src={video.thumbnail} 
          alt={video.title}
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 rounded-full p-3">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
    <div className="p-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full mb-2">
        {video.category}
      </span>
      <Link href={`/youtube/${video.slug}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-red-600 transition-colors">
          {video.title}
        </h3>
      </Link>
      <p className="text-gray-600 mb-4">{video.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <FiUser className="mr-1" />
          <span>{video.author}</span>
        </div>
        <div className="flex items-center">
          <FiCalendar className="mr-1" />
          <span>{new Date(video.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <span>{video.views} views</span>
        </div>
      </div>
    </div>
  </div>
);

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'blogs' | 'videos'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on active tab and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'blogs' && post.type === 'blog') || 
                      (activeTab === 'videos' && post.type === 'video');
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <Head>
        <title>Cimage College Media Gallery | Blogs & Videos</title>
        <meta name="description" content="Explore Cimage College blogs, campus events, student achievements, and educational videos" />
        <meta property="og:title" content="Cimage College Media Gallery" />
        <meta property="og:description" content="Discover our latest blogs and videos showcasing campus life and academics" />
        <meta property="og:image" content="https://www.cimage.in/images/og-media.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Catalyst College Media</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our latest blogs, campus events, student achievements, and educational videos
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search blogs and videos..."
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 bg-white focus:ring-indigo-400 pr-12"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on new search
                }}
              />
              <FiSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            <button
              onClick={() => {
                setActiveTab('all');
                setCurrentPage(1);
              }}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'all' ? 'bg-white text-indigo-600 border-t border-l border-r border-gray-200' : 'text-gray-600 hover:text-indigo-500'}`}
            >
              All Media
            </button>
            <button
              onClick={() => {
                setActiveTab('blogs');
                setCurrentPage(1);
              }}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'blogs' ? 'bg-white text-indigo-600 border-t border-l border-r border-gray-200' : 'text-gray-600 hover:text-indigo-500'}`}
            >
              Blogs
            </button>
            <button
              onClick={() => {
                setActiveTab('videos');
                setCurrentPage(1);
              }}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'videos' ? 'bg-white text-indigo-600 border-t border-l border-r border-gray-200' : 'text-gray-600 hover:text-indigo-500'}`}
            >
              Videos
            </button>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} results
          </div>

          {/* Posts Grid */}
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map(item => (
                item.type === 'blog' ? (
                  <BlogCard key={`blog-${item.id}`} post={item} />
                ) : (
                  <VideoCard key={`video-${item.id}`} video={item} />
                )
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No posts found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border-t border-b border-gray-300 text-sm font-medium ${currentPage === page ? 'bg-indigo-50 text-indigo-600 border-indigo-500' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}