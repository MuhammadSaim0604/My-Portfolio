import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// This would typically come from an API or CMS
const blogPost = {
  title: "10 UI Design Trends to Watch in 2025",
  date: "March 15, 2025",
  readTime: 8,
  author: {
    name: "Ali Rizwan",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    role: "Web Developer & Designer"
  },
  category: "Web Design",
  tags: ["UI Design", "Design Trends", "Web Design"],
  image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: `
    <p>The world of UI design is constantly evolving, with new trends and techniques emerging each year. As we move through 2025, several exciting trends are shaping the way we design digital interfaces. In this article, we'll explore the top 10 UI design trends that are defining the digital landscape this year.</p>

    <h2>1. Advanced Glassmorphism</h2>
    <p>Glassmorphism continues to evolve, with designers now implementing more complex translucent effects that adapt to the content behind them. This creates a sense of depth and dimension while maintaining readability and usability.</p>

    <h2>2. 3D Elements Integration</h2>
    <p>With improving browser performance and WebGL capabilities, more designers are incorporating subtle 3D elements into otherwise flat designs. These elements add visual interest without compromising load times or accessibility.</p>

    <h2>3. Variable Fonts & Dynamic Typography</h2>
    <p>Variable fonts are allowing designers to create more responsive and expressive typography. With a single font file containing multiple variations, we're seeing more dynamic text that adapts to different contexts and screen sizes.</p>

    <h2>4. Dark Mode Evolution</h2>
    <p>Dark mode is no longer just an alternative color scheme. Designers are now creating unique experiences specifically for dark mode, using subtle gradients, glows, and contrast techniques that wouldn't work in light mode.</p>

    <h2>5. Micro-interactions 2.0</h2>
    <p>Micro-interactions have become more sophisticated, using physics-based animations that respond naturally to user input. These subtle movements create a more intuitive and engaging user experience.</p>

    <h2>6. Augmented Reality Integration</h2>
    <p>As AR capabilities become more accessible on mobile devices, UI designers are finding creative ways to blend digital interfaces with the physical world, creating more immersive and contextual experiences.</p>

    <h2>7. Ethical & Inclusive Design</h2>
    <p>There's a growing emphasis on creating interfaces that are accessible to everyone, regardless of ability or background. This includes considerations for color contrast, text size, navigation options, and cultural sensitivity.</p>

    <h2>8. Voice User Interfaces (VUI)</h2>
    <p>Voice interaction is becoming a standard component of modern UI design, requiring designers to consider how visual interfaces support and complement voice commands and responses.</p>

    <h2>9. Data Visualization Evolution</h2>
    <p>With the increasing importance of data in our daily lives, designers are finding more creative and intuitive ways to visualize complex information, making it more accessible and actionable for users.</p>

    <h2>10. Sustainable Digital Design</h2>
    <p>There's a growing awareness of the environmental impact of digital products. Designers are optimizing interfaces to reduce energy consumption and server load, contributing to more sustainable digital ecosystems.</p>

    <h3>Conclusion</h3>
    <p>As we progress through 2025, these UI design trends are shaping the way we interact with digital products. The most successful designs will thoughtfully incorporate these trends while maintaining a focus on usability, accessibility, and the specific needs of their users.</p>

    <p>Stay ahead of the curve by experimenting with these trends in your next project, but remember that good design is ultimately about solving problems and creating meaningful experiences, not just following the latest trends.</p>
  `,
  relatedPosts: [
    {
      id: 2,
      title: "The Future of Web Development: What's Next?",
      slug: "future-of-web-development",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "February 28, 2025",
      category: "Development",
    },
    {
      id: 5,
      title: "Responsive Design Best Practices for 2025",
      slug: "responsive-design-best-practices",
      image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "January 18, 2025",
      category: "Web Design",
    },
    {
      id: 6,
      title: "Building a Strong Online Portfolio for Freelancers",
      slug: "building-online-portfolio",
      image: "https://images.pexels.com/photos/3782794/pexels-photo-3782794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "January 05, 2025",
      category: "Business",
    },
  ]
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    // In a real app, you would fetch the blog post based on the slug
    console.log(`Fetching blog post with slug: ${slug}`);
  }, [slug]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
              {blogPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-slide-up">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center text-gray-600 gap-4 md:gap-6">
              <div className="flex items-center">
                <img 
                  src={blogPost.author.image} 
                  alt={blogPost.author.name} 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{blogPost.author.name}</p>
                  <p className="text-sm">{blogPost.author.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{blogPost.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="max-w-3xl mx-auto">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
                
                {/* Tags */}
                <div className="flex flex-wrap items-center mt-12 gap-3">
                  <Tag size={18} className="text-gray-500" />
                  {blogPost.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Share */}
                <div className="border-t border-b border-gray-200 py-6 my-8">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="text-lg font-medium flex items-center">
                      <Share2 size={20} className="mr-2 text-gray-600" />
                      Share this article
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                      <a 
                        href="#" 
                        className="bg-[#3b5998] hover:bg-[#324b80] text-white p-2 rounded-full transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="bg-[#1da1f2] hover:bg-[#1a91da] text-white p-2 rounded-full transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="bg-[#0077b5] hover:bg-[#00669c] text-white p-2 rounded-full transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img 
                      src={blogPost.author.image} 
                      alt={blogPost.author.name} 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">About {blogPost.author.name}</h3>
                      <p className="text-gray-600 mb-4">
                        Freelance web developer and designer with over 5 years of experience. Specializing in creating beautiful, functional websites and digital experiences for businesses worldwide.
                      </p>
                      <div className="flex space-x-3">
                        <Link to="/about" className="text-primary-600 font-medium hover:text-primary-700">
                          More About Me
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link to="/contact" className="text-primary-600 font-medium hover:text-primary-700">
                          Get in Touch
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPost.relatedPosts.map((post) => (
                      <div key={post.id} className="card overflow-hidden">
                        <Link to={`/blog/${post.slug}`}>
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-40 object-cover"
                          />
                        </Link>
                        <div className="p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-xs text-gray-500">{post.date}</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-xs text-primary-600">{post.category}</span>
                          </div>
                          <Link to={`/blog/${post.slug}`}>
                            <h4 className="font-bold hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h4>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* About Author */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={blogPost.author.image} 
                    alt={blogPost.author.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{blogPost.author.name}</h4>
                    <p className="text-sm text-gray-600">{blogPost.author.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  I share insights, tips, and trends in web development and design. Follow along for valuable content to help you grow your digital presence.
                </p>
                <Link to="/about" className="text-primary-600 font-medium hover:text-primary-700">
                  More About Me
                </Link>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-50 rounded-lg shadow-sm p-6 mb-8">
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
              
              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Need a Website?</h3>
                <p className="mb-4">
                  I specialize in creating beautiful, functional websites that help businesses grow online.
                </p>
                <Link to="/contact" className="btn bg-white hover:bg-gray-100 text-primary-600 w-full text-center">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;