// src/components/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/css/Services.css'; // Make sure this path is correct

// Import the images
import talkImageUrl from '../assets/People-talking.avif';
import buildImageUrl from '../assets/Code-on-screen.avif';
import launchImageUrl from '../assets/website-success.avif';

const Services = () => {
  return (
    <section id="services-experience" className="services-section container">
      <h2>How We Work Together</h2>
      <p className="section-intro">
        Bringing your vision to life should be straightforward and collaborative. Here's our simple approach:
      </p>

      <div className="service-steps-simplified">

        {/* Step 1: Let's Talk */}
        <div className="service-step">
          <img src={talkImageUrl} alt="Planning and discussion" className="service-step-image"/>
          <div className="service-step-content">
            <h3>1. Let's Talk & Plan</h3>
            <p>
              First things first, we chat! We'll dig into what you need, your goals, and your ideas. No jargon, just a clear conversation to make sure we're on the same page. You'll get a straightforward plan outlining exactly what we'll do, when, and how much.
            </p>
            <p><strong>You'll feel:</strong> Heard, understood, and clear on the plan.</p>
          </div>
        </div>

        {/* Step 2: We Build */}
        <div className="service-step">
          <img src={buildImageUrl} alt="Building the project" className="service-step-image"/>
          <div className="service-step-content">
            <h3>2. We Build & Collaborate</h3>
            <p>
              This is where the magic happens! We get to work building your project, keeping you in the loop with regular updates [mention how: e.g., "via quick check-ins"]. We value your feedback along the way to ensure the final result is exactly what you envisioned.
            </p>
            <p><strong>You'll feel:</strong> Involved, informed, and excited as it takes shape.</p>
          </div>
        </div>

        {/* Step 3: You Launch */}
        <div className="service-step">
          <img src={launchImageUrl} alt="Launching the project" className="service-step-image"/>
          <div className="service-step-content">
            <h3>3. You Launch & Shine</h3>
            <p>
              We deliver the finished project, polished and ready to go. We'll help you get it launched smoothly. Need help afterwards? We can discuss ongoing support to keep things running perfectly.
            </p>
            <p><strong>You'll feel:</strong> Confident, supported, and ready for success.</p>
          </div>
        </div>

      </div>

      <div className="call-to-action services-cta">
        <h3>Ready to get started?</h3>
        <p>
          Let's chat about your project!
        </p>
        <Link to="/contact" className="cta-button">Contact Me</Link>
      </div>

    </section>
  );
};

export default Services;