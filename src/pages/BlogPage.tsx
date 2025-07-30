import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

// Blog post data
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  date: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 UI Design Trends to Watch in 2025",
    slug: "ui-design-trends-2025",
    excerpt: "Explore the latest UI design trends that are shaping the digital landscape in 2025, from glassmorphism to 3D elements.",
    content: "",
    category: "Web Design",
    tags: ["UI Design", "Design Trends", "Web Design"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 15, 2025",
    readTime: 8,
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Next?",
    slug: "future-of-web-development",
    excerpt: "An in-depth look at the technologies and techniques that will define web development in the coming years.",
    content: "",
    category: "Development",
    tags: ["Web Development", "JavaScript", "Future Tech"],
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "February 28, 2025",
    readTime: 10,
  },
  {
    id: 3,
    title: "How to Choose the Right Freelancer for Your Project",
    slug: "choosing-freelancer",
    excerpt: "Tips and strategies for businesses looking to hire and work effectively with freelance professionals.",
    content: "",
    category: "Business",
    tags: ["Freelancing", "Project Management", "Hiring"],
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "February 12, 2025",
    readTime: 7,
  },
  {
    id: 4,
    title: "Optimizing Website Performance: The Ultimate Guide",
    slug: "website-performance-guide",
    excerpt: "Learn how to optimize your website for speed and performance to improve user experience and SEO rankings.",
    content: "",
    category: "Development",
    tags: ["Performance", "Optimization", "SEO"],
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "January 30, 2025",
    readTime: 12,
  },
  {
    id: 5,
    title: "Responsive Design Best Practices for 2025",
    slug: "responsive-design-best-practices",
    excerpt: "The latest best practices for creating responsive websites that provide exceptional user experiences across all devices.",
    content: "",
    category: "Web Design",
    tags: ["Responsive Design", "Mobile-First", "UX"],
    image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "January 18, 2025",
    readTime: 9,
  },
  {
    id: 6,
    title: "Building a Strong Online Portfolio for Freelancers",
    slug: "building-online-portfolio",
    excerpt: "How to create a compelling online portfolio that attracts clients and showcases your skills effectively.",
    content: "",
    category: "Business",
    tags: ["Portfolio", "Freelancing", "Marketing"],
    image: "https://images.pexels.com/photos/3782794/pexels-photo-3782794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "January 05, 2025",
    readTime: 6,
  },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = filteredPosts.slice(0, 6);

  // Extract all tags for the tag cloud
  const allTags = blogPosts.flatMap(post => post.tags);
  const tagCounts: Record<string, number> = {};
  allTags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });
  const uniqueTags = [...new Set(allTags)];

  return (
    <>
    {/* Hero Section */}
 <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-80"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-slide-up">
            My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            A showcase of my recent projects and client work
            </p>
        

            <div className="relative max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="FEATURED ARTICLE"
            title="Latest from the Blog"
            description="Explore the most recent insights and tips from my collection of articles."
          />

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mr-3">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">{featuredPost.date} • {featuredPost.readTime} min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary">
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All
                </button>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === selectedCategory
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="card overflow-hidden">
                      <Link to={`/blog/${post.slug}`}>
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-sm text-gray-500 mr-3">{post.date}</span>
                          <span className="text-sm text-primary-600">{post.category}</span>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors">{post.title}</h3>
                        </Link>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{post.readTime} min read</span>
                          <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                            Read more <ArrowRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                    }}
                    className="btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* About Author */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Alex Morgan" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Ali Rizwan</h4>
                    <p className="text-sm text-gray-600">Web Developer & Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  I share insights, tips, and trends in web development and design. Follow along for valuable content to help you grow your digital presence.
                </p>
                <Link to="/about" className="text-primary-600 font-medium hover:text-primary-700">
                  More About Me
                </Link>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="flex items-center justify-between w-full text-left py-2 hover:text-primary-600"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-50 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest articles and insights directly in your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;