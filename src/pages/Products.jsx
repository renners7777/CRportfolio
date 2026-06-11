import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Services.css';

import talkImageUrl from '../assets/People-talking.avif';
import buildImageUrl from '../assets/Code-on-screen.avif';
import launchImageUrl from '../assets/website-success.avif';
import { Link } from 'react-router-dom';


const Products = () => {
  return (
    <section id="products-overview" className="services-section container">
      <h2>Products In Progress</h2>
      <p className="section-intro">
        Placeholder content for pre-launch products. These are the ideas I'm currently shaping:
      </p>

      <div className="service-steps-simplified">
        <div className="service-step">
          <img src={talkImageUrl} alt="Stroke Survivor Companion" className="service-step-image" />
          <div className="service-step-content">
            <h3><Link to="/products/strokesurvivorcompanion">Stroke Survivor Companion</Link></h3>
            <p>
              A mobile-first companion app designed to support stroke survivors with personalized recovery guidance, progress tracking, and easy access to resources. Google Play launch is pending, and the app is being built with accessibility and practical support in mind.
            </p>
            <p><strong>Status:</strong> Pre-launch placeholder for the upcoming Google Play release.</p>
            <Link to="/products/strokesurvivorcompanion" className="cta-button" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More</Link>
          </div>
        </div>

        <div className="service-step">
          <img src={buildImageUrl} alt="WorshipFlow AI" className="service-step-image" />
          <div className="service-step-content">
            <h3><Link to="/worshipflow-ai" className="cta-button">Learn more about WorshipFlow AI</Link></h3>
            <p>
              A SaaS AI assistant concept for Planning Center Online that helps teams automate workflows, generate planning insights, and manage event data more intelligently. This product is currently in planning mode and available as a placeholder offering.
            </p>
            <p><strong>Status:</strong> Early-stage AI SaaS placeholder for future integration work.</p>
            <Link to="/products/worshipflow-ai" className="cta-button" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More</Link>
          </div>
        </div>

        <div className="service-step">
          <img src={launchImageUrl} alt="Product roadmap" className="service-step-image" />
          <div className="service-step-content">
            <h3>Custom Product Support</h3>
            <p>
              I also support other product concepts and digital tools in early development. If you want to explore a new app, SaaS idea, or AI-enhanced workflow, I can help map it out and build the first working version.
            </p>
            <p><strong>Next step:</strong> book a quick session to talk product scope and priorities.</p>
          </div>
        </div>
      </div>

      <div className="call-to-action services-cta">
        <h3>Want to explore one of these products?</h3>
        <p>
          Get in touch to discuss early access, product direction, or launch planning.
        </p>
        <Link to="/contact" className="cta-button">Contact Me</Link>
      </div>
    </section>
  );
};

export default Products;
