// src/components/Services.jsx
import React from 'react';
import '../styles/css/Services.css'; 

const Services = () => {
  return (
    <section id="services-experience" className="services-section">
      <div className="container">
        <h2>What to Expect When You Partner With Us</h2>
        <p className="section-intro">
          We believe in a transparent, collaborative, and results-oriented process. When you choose to work with us, here’s the journey you can expect:
        </p>

        <div className="process-steps">
          {/* Step 1: Discovery & Understanding */}
          <div className="process-step">
            <div className="step-icon"> {/* You can use an icon library like FontAwesome or custom SVGs */}
              <i className="fas fa-search"></i> {/* Example icon */}
            </div>
            <h3>1. Discovery & Strategy Session</h3>
            <p>
              It starts with a conversation. We'll dive deep into your goals, challenges, target audience, and vision. You'll experience active listening and insightful questions as we work together to understand the core objectives of your project.
              <br />
              <strong>Your Experience:</strong> Feeling heard, understood, and confident that we grasp your unique needs.
            </p>
          </div>

          {/* Step 2: Tailored Proposal & Planning */}
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-file-alt"></i> {/* Example icon */}
            </div>
            <h3>2. Customized Proposal & Clear Roadmap</h3>
            <p>
              Based on our discovery session, we'll present a detailed proposal outlining the project scope, deliverables, timeline, and investment. No surprises. You'll receive a clear roadmap showing how we'll achieve your goals together.
              <br />
              <strong>Your Experience:</strong> Clarity on the plan, deliverables, and costs. Empowerment to make an informed decision.
            </p>
          </div>

          {/* Step 3: Collaborative Execution */}
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-users-cog"></i> {/* Example icon */}
            </div>
            <h3>3. Collaborative Execution & Regular Updates</h3>
            <p>
              Once we kick off, collaboration is key. We'll maintain open lines of communication [mention your preferred method: e.g., regular check-ins, project management tools, email updates]. You'll be involved in key decisions and review stages, ensuring the project stays aligned with your vision.
              <br />
              <strong>Your Experience:</strong> Feeling like a valued partner, staying informed, and seeing tangible progress.
            </p>
            {/* TODO: Add specifics about YOUR execution process - e.g., design reviews, development sprints, content creation phases */}
          </div>

          {/* Step 4: Delivery & Refinement */}
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-check-circle"></i> {/* Example icon */}
            </div>
            <h3>4. Quality Delivery & Feedback Integration</h3>
            <p>
              We deliver high-quality work built upon the agreed strategy. You'll have the opportunity to review the deliverables and provide feedback. We value your input and will refine the work to ensure it meets (and hopefully exceeds) your expectations.
              <br />
              <strong>Your Experience:</strong> Receiving polished deliverables, having your feedback valued and implemented efficiently.
            </p>
          </div>

          {/* Step 5: Launch & Ongoing Support (Optional) */}
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-rocket"></i> {/* Example icon */}
            </div>
            <h3>5. Launch & Beyond [Optional - Adjust as needed]</h3>
            <p>
              We'll support you through the launch process. Depending on our agreement, we can offer ongoing support, maintenance, or discuss next steps to continue building on our success together.
              <br />
              <strong>Your Experience:</strong> A smooth transition, continued support, and a foundation for future growth.
            </p>
            {/* TODO: Specify if you offer post-project support, retainers, etc. */}
          </div>
        </div>

        <div className="key-benefits">
          <h3>Overall, You Will Experience:</h3>
          <ul>
            <li><i className="fas fa-handshake"></i> <strong>True Partnership:</strong> We work *with* you, not just *for* you.</li>
            <li><i className="fas fa-eye"></i> <strong>Transparency:</strong> Clear communication and processes every step of the way.</li>
            <li><i className="fas fa-star"></i> <strong>Quality & Expertise:</strong> Access to skilled professionals dedicated to your success.</li>
            <li><i className="fas fa-bullseye"></i> <strong>Focus on Results:</strong> Everything we do is aimed at achieving your specific goals.</li>
            <li><i className="fas fa-comments"></i> <strong>Responsive Communication:</strong> We're here to answer questions and provide updates promptly.</li>
          </ul>
          {/* TODO: Add/modify benefits based on your unique selling points mentioned in the PDF */}
        </div>

        <div className="call-to-action">
          <h3>Ready to Start Your Journey?</h3>
          <p>Let's discuss how we can tailor this process to your specific project needs.</p>
          {/* TODO: Add a button or link to your contact page/form */}
          {/* <button className="cta-button">Get in Touch</button> */}
        </div>
      </div>
    </section>
  );
};

export default Services;