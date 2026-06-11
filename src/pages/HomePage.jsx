import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import components used in HomePage
import Home from '../components/Home';
import Skills from '../components/Skills';

// Import things needed for the Portfolio section
import PortfolioItem from "../components/PortfolioItem.jsx";
import '../styles/css/PortfolioPage.css'; // Import portfolio styles
// Import portfolio images
import StTimsMusicPlannerImage from '../assets/StTimsMusicPlanner1.png';
import SocialWorkSupervisorAgent from '../assets/SocialWorkSupervisorAgent.png';

const INITIAL_ITEMS_VISIBLE = 6; // Define how many items to show initially

const HomePage = () => {
    // Define portfolio items array (copied from PortfolioPage.jsx)
    const portfolioItems = [
        { id: 1, title: 'Church Music Project', description: 'Producing a website to share music resources for church musicians.', link: 'https://st-timothy-s-church-song-planner-and-tracker-198390885385.europe-west1.run.app/', imageUrl: StTimsMusicPlannerImage },
        { id: 2, title: 'Social Work Supervisor Agent', description: 'An AI agent designed to assist social work supervisors in managing their teams and providing support to their supervisees.', link: 'https://console.cloud.google.com/agent-platform/studio/agent-designer/edit/agent_1779550783933?project=social-work-triage-agent&session=&userId=user-1779550783933', imageUrl: SocialWorkSupervisorAgent },
    ];

    // State to control visible items
    const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_ITEMS_VISIBLE);

    const showMoreItems = () => {
        setVisibleItemsCount(portfolioItems.length); // Show all items
    };

    // Optional: Function to show less
    // const showLessItems = () => {
    //     setVisibleItemsCount(INITIAL_ITEMS_VISIBLE);
    // };

    return (
        <div className="home-page">
            {/* 1. Render Home Section */}
            <Home />

            {/* 2. Render Skills Section */}
            <Skills />

            {/* Add a horizontal line break */}
            <hr style={{ margin: '40px 0' }} /> {/* Optional: Add some margin */}

            <div className="products-cta container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2>Current Projects</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
                    Learn more about the Stroke Survivor Companion app and WorshipFlow AI product currently in development.
                </p>
                <Link to="/products" className="cta-button" style={{ display: 'inline-block' }}>
                    View Development Products
                </Link>
            </div>

            {/* 3. Render Portfolio Section */}
            <div className="portfolio-section container" style={{ paddingTop: '0', paddingBottom: '40px' }}> {/* Adjusted padding */}
                {/* Center the H2 heading */}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Portfolio</h2> {/* Added centering and bottom margin */}
                <div className="portfolio-grid">
                    {/* Slice the array before mapping */}
                    {portfolioItems.slice(0, visibleItemsCount).map(item => (
                        <PortfolioItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            projectUrl={item.link}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>

                {/* Conditionally render the "Show More" button */}
                {visibleItemsCount < portfolioItems.length && (
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <button onClick={showMoreItems} className="show-more-button">
                            Show More Projects
                        </button>
                    </div>
                )}

                {/* Optional: Show Less button */}
                {/* {visibleItemsCount > INITIAL_ITEMS_VISIBLE && (
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <button onClick={showLessItems} className="show-more-button">
                            Show Less Projects
                        </button>
                    </div>
                )} */}

            </div>

        </div>
    );
};

export default HomePage;