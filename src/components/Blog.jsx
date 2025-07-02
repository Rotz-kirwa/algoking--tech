import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Why Every Business MUST Have a Website in 2024',
      excerpt: 'Without a website, you\'re losing 70% of potential customers daily. Discover how a professional website transforms your business into a 24/7 revenue generator.',
      date: '2025',
      category: 'Business Growth',
      readTime: '2025',
      image: '💼'
    },
    {
      title: 'Your Competitors Have Websites - Do You?',
      excerpt: 'While you hesitate, competitors capture YOUR customers online. Learn how a website gives you the competitive edge to dominate your market.',
      date: '2025',
      category: 'Competition',
      readTime: '2025',
      image: '🏆'
    },
    {
      title: 'Stop Losing Money: The Hidden Cost of NOT Having a Website',
      excerpt: 'Every day without a website costs you thousands in lost sales. Calculate exactly how much money you\'re leaving on the table and why waiting is expensive.',
      date: '2025',
      category: 'ROI',
      readTime: '2025',
      image: '💰'
    }
  ];

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <h2 className="section-title">Latest from Our Blog</h2>
        <p className="blog-subtitle">
          Discover why successful businesses invest in professional websites and how you can transform your business growth today.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">{post.image}</span>
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                {/* Removed Read More link as per user request */}
              </div>
            </article>
          ))}
        </div>
        {/* Removed the View All Posts button as per user request */}
      </div>
    </section>
  );
};

export default Blog;