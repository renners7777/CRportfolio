import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import Skills from '../components/Skills';
import PortfolioItem from "../components/PortfolioItem.jsx";
import { blogPosts } from '../data/blogPosts';
import '../styles/css/PortfolioPage.css';
import '../styles/css/Blog.css';

import StTimsMusicPlannerImage from '../assets/StTimsMusicPlanner1.png';
import SocialWorkSupervisorAgent from '../assets/SocialWorkSupervisorAgent.png';

const HomePage = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Social Work Supervisor Agent (Open Source AI Prototype)',
            description: 'A personal hackathon exploration project demonstrating AI agent workflows and triage assistance frameworks.',
            link: 'https://console.cloud.google.com/agent-platform/studio/agent-designer/edit/agent_1779550783933?project=social-work-triage-agent&session=&userId=user-1779550783933',
            imageUrl: SocialWorkSupervisorAgent
        },
        {
            id: 2,
            title: 'Church Music Resource Planner',
            description: 'A full-stack web application designed for resource coordination and song management.',
            link: 'https://st-timothy-s-church-song-planner-and-tracker-198390885385.europe-west1.run.app/',
            imageUrl: StTimsMusicPlannerImage
        },
    ];

    return (
        <div className="home-page">
            {/* 1. Profile / Bio */}
            <Home />

            {/* 2. Featured Blog Articles Callout Section */}
            <div className="container" style={{ margin: '40px auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2>Latest AI Contracting Articles</h2>
                    <p style={{ maxWidth: '700px', margin: '10px auto', opacity: 0.85 }}>
                        Learn about independent AI model training, RLHF evaluation, and how to build a flexible career in AI.
                    </p>
                </div>

                <div className="blog-grid" style={{ marginBottom: '20px' }}>
                    {blogPosts.slice(0, 2).map((post) => (
                        <article className="blog-card" key={post.id}>
                            <div>
                                <div className="blog-card-header">
                                    <span className="category-badge">{post.category}</span>
                                    <time>{post.date}</time>
                                </div>
                                <h3 className="blog-card-title">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>
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

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/blog" className="cta-button" style={{ display: 'inline-block' }}>
                        Explore All Articles
                    </Link>
                </div>
            </div>

            {/* 3. Calendly CTA Banner */}
            <div className="container" style={{ margin: '50px auto' }}>
                <div className="blog-cta-box" style={{ margin: 0 }}>
                    <h2>Ready to Train AI Models or Discuss Contracting?</h2>
                    <p style={{ maxWidth: '650px', margin: '10px auto 20px' }}>
                        Schedule a 1-on-1 session to explore AI model training techniques, contractor setup, or dataset evaluation.
                    </p>
                    <a
                        href="https://calendly.com/chrisrenshaw79/make-money-training-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-cta-button"
                    >
                        Book a Session on Calendly
                    </a>
                </div>
            </div>

            {/* 4. Skills & Competencies */}
            <Skills />

            {/* 5. Personal Exploration & Hackathon Projects */}
            <div className="portfolio-section container" style={{ padding: '40px 0' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Personal Projects & Benchmarks</h2>
                <div className="portfolio-grid">
                    {portfolioItems.map(item => (
                        <PortfolioItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            projectUrl={item.link}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;