import React from 'react';
import '../styles/css/WorshipflowAI.css';

const WorshipflowAI = () => {
    return (
        <div className="worshipflow-page">
            {/* Hero Section */}
            <header className="hero">
                <h1>Simplify Liturgical Administration.</h1>
                <p>
                    WorshipFlow AI leverages state-of-the-art LLM intelligence to automatically curate sermon setlists, provision musical key/tempo arrangements, and script volunteer rehearsal briefs—perfectly synchronized with your Planning Center Services catalog.
                </p>
                <div className="hero-buttons">
                    <a href="#login" className="btn btn-primary">
                        <i className="fa-solid fa-bolt"></i> Start 30-Day Free Trial
                    </a>
                    <a href="#features" className="btn btn-secondary">
                        <i className="fa-solid fa-magnifying-glass"></i> Explore Features
                    </a>
                </div>
            </header>

            {/* Integration Sync Section */}
            <section className="integration-section">
                <div className="integration-container">
                    <div className="integration-logos">
                        <div className="integration-logo-box">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div className="connector-line">
                            <i className="fa-solid fa-circle-nodes"></i>
                        </div>
                        <div className="integration-logo-box pco">
                            <i className="fa-solid fa-church"></i>
                        </div>
                    </div>
                    <h2 style={{ margin: 0, color: '#fff', fontSize: '1.8em', fontWeight: 800 }}>Bidirectional Planning Center Synchronization</h2>
                    <p style={{ color: 'var(--wf-text-muted)', margin: 0, maxWidth: '650px', fontSize: '1em' }}>
                        No manual data transfer required. WorshipFlow integrates securely using OAuth 2.0 to sync your repertoire libraries, retrieve scheduled volunteer registers, and patch arrangement metadata directly to PCO Services.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="section-header">
                    <h2>Human-in-the-Loop Orchestration</h2>
                    <p>Combine high-frequency AI speed with manual review buttons to maintain absolute leadership oversight.</p>
                </div>
                
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fa-solid fa-brain"></i></div>
                        <h3>Sermon Text Analysis</h3>
                        <p>
                            Paste weekly sermon drafts, scriptures, or outline briefs. The Gemini engine extracts theological themes, scriptural focuses, and matches them to curated song files in your library database.
                        </p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fa-solid fa-music"></i></div>
                        <h3>Arrangement Provisioning</h3>
                        <p>
                            Automate metadata populating. Gemini checks and provisions songs with tempo (BPM) records and starting key arrangements, updating arrangement profiles instantly inside PCO Services.
                        </p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fa-solid fa-microphone"></i></div>
                        <h3>Roster-Aware Rehearsal Briefs</h3>
                        <p>
                            Ensure your band is prepared. WorshipFlow checks scheduled vocalists and instrumental rotas to generate custom briefings containing singing notes, transposition directives, and compliance licensing advice.
                        </p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fa-solid fa-file-csv"></i></div>
                        <h3>Pre-Staging CSV Verification</h3>
                        <p>
                            Migrate libraries safely. Scan uploaded song lists for duplicate matches, encode bullet errors, edit titles inline, and bulk clean formatting symbols with a single click before saving.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="section-header">
                    <h2>Simple, Tiered Pricing</h2>
                    <p>Upgrade your workflows. Select the billing plan that aligns with your weekly music rotation.</p>
                </div>

                <div className="pricing-grid">
                    {/* Basic Plan */}
                    <div className="price-card">
                        <div className="plan-name">Basic Plan</div>
                        <div className="plan-desc">For small community ministries and single ensembles.</div>
                        <div className="price-container">
                            <span className="price-amount">£12</span>
                            <span className="price-period">/ month</span>
                        </div>
                        <a href="#login" className="btn btn-secondary" style={{ marginBottom: '30px' }}>Get Basic</a>
                        <ul className="features-list">
                            <li><i className="fa-solid fa-circle-check"></i> Up to 40 PCO Volunteers</li>
                            <li><i className="fa-solid fa-circle-check"></i> AI-Native Sermon Matching</li>
                            <li><i className="fa-solid fa-circle-check"></i> Repertoire Sync & Ingestion</li>
                            <li><i className="fa-solid fa-circle-check"></i> Local Firestore History</li>
                            <li className="disabled"><i className="fa-solid fa-circle-xmark"></i> Custom Vocal & Band Briefs</li>
                            <li className="disabled"><i className="fa-solid fa-circle-xmark"></i> Dedicated Integration Support</li>
                        </ul>
                    </div>

                    {/* Standard Plan */}
                    <div className="price-card featured">
                        <div className="featured-tag">Most Popular</div>
                        <div className="plan-name">Standard Plan</div>
                        <div className="plan-desc">For active local churches coordinating multiple volunteer rotas.</div>
                        <div className="price-container">
                            <span className="price-amount">£29</span>
                            <span className="price-period">/ month</span>
                        </div>
                        <a href="#login" className="btn btn-primary" style={{ marginBottom: '30px' }}>Get Standard</a>
                        <ul className="features-list">
                            <li><i className="fa-solid fa-circle-check"></i> Up to 150 PCO Volunteers</li>
                            <li><i className="fa-solid fa-circle-check"></i> AI-Native Sermon Matching</li>
                            <li><i className="fa-solid fa-circle-check"></i> Repertoire Sync & Ingestion</li>
                            <li><i className="fa-solid fa-circle-check"></i> Local Firestore History</li>
                            <li><i className="fa-solid fa-circle-check"></i> Custom Vocal & Band Briefs</li>
                            <li className="disabled"><i className="fa-solid fa-circle-xmark"></i> Dedicated Integration Support</li>
                        </ul>
                    </div>

                    {/* Premium Plan */}
                    <div className="price-card">
                        <div className="plan-name">Premium Plan</div>
                        <div className="plan-desc">For multi-site churches and high-frequency music ministries.</div>
                        <div className="price-container">
                            <span className="price-amount">£59</span>
                            <span className="price-period">/ month</span>
                        </div>
                        <a href="#login" className="btn btn-secondary" style={{ marginBottom: '30px' }}>Go Premium</a>
                        <ul className="features-list">
                            <li><i className="fa-solid fa-circle-check"></i> Unlimited PCO Volunteers</li>
                            <li><i className="fa-solid fa-circle-check"></i> AI-Native Sermon Matching</li>
                            <li><i className="fa-solid fa-circle-check"></i> Repertoire Sync & Ingestion</li>
                            <li><i className="fa-solid fa-circle-check"></i> Local Firestore History</li>
                            <li><i className="fa-solid fa-circle-check"></i> Custom Vocal & Band Briefs</li>
                            <li><i className="fa-solid fa-circle-check"></i> Priority Support & Custom Tiers</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorshipflowAI;