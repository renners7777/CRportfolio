import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Disclaimer from '../components/Disclaimer';
import '../styles/css/Blog.css';

const BlogPage = () => {
    return (
        <div className="blog-page container">
            <div className="blog-header">
                <h1>AI Contracting & Model Training Blog</h1>
                <p>
                    Insights on independent AI model training, RLHF evaluation, prompt engineering, and the benefits of freelancing in artificial intelligence.
                </p>

                <div className="blog-categories">
                    <span className="category-badge">AI Contracting</span>
                    <span className="category-badge">RLHF & Alignment</span>
                    <span className="category-badge">AI Ethics</span>
                </div>
            </div>

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <article className="blog-card" key={post.id}>
                        <div>
                            <div className="blog-card-header">
                                <span className="category-badge">{post.category}</span>
                                <time>{post.date}</time>
                            </div>
                            <h2 className="blog-card-title">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="blog-card-excerpt">{post.excerpt}</p>
                        </div>
                        <div className="blog-card-footer">
                            <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{post.readTime}</span>
                            <Link to={`/blog/${post.slug}`} className="read-more-link">
                                Read Article &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* General Call to Action to Calendly */}
            <div className="blog-cta-box" style={{ marginTop: '40px' }}>
                <h3>Looking to monetize your skills or get into AI model training?</h3>
                <p>Book a 1-on-1 session to discuss freelance AI contracting opportunities, instruction tuning, and dataset evaluation.</p>
                <a
                    href="https://calendly.com/chrisrenshaw79/make-money-training-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-cta-button"
                >
                    Schedule a Meeting via Calendly
                </a>
            </div>

            <Disclaimer />
        </div>
    );
};

export default BlogPage;
