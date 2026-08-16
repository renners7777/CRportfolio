import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Disclaimer from '../components/Disclaimer';
import '../styles/css/Blog.css';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
                <h2>Article Not Found</h2>
                <p>The requested blog post could not be found.</p>
                <Link to="/blog" className="read-more-link" style={{ marginTop: '20px', display: 'inline-block' }}>
                    &larr; Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="blog-post-page container">
            <Link to="/blog" className="back-to-blog">
                &larr; Back to All Articles
            </Link>

            <header>
                <div className="blog-post-meta">
                    <span className="category-badge">{post.category}</span>
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                </div>
                <h1 className="blog-post-title">{post.title}</h1>
            </header>

            <hr style={{ margin: '20px 0 35px', borderColor: 'var(--card-border)' }} />

            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Disclaimer />
        </div>
    );
};

export default BlogPostPage;
