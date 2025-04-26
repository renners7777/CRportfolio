import React, { useState } from 'react';

// Import components used in HomePage
import Home from '../components/Home';
import Skills from '../components/Skills';

// Import things needed for the Portfolio section
import PortfolioItem from "../components/PortfolioItem.jsx";
import '../styles/css/PortfolioPage.css'; // Import portfolio styles
// Import portfolio images
import churchMusicImage from '../assets/photo-1663619079733-c22429418bc2.avif';
import htmlTechnicalPageClone from '../assets/Screenshot 2025-04-13 at 16-02-12 HTML technical documentation page.png';
import christmasAPIImage from '../assets/christmasAPIImage.avif';
import crEmojisAPI from '../assets/CR-emojis.png';
import crGuideToSheffield from '../assets/CRGuideToSheffield.png';
import ukSWLegislationChatbot from '../assets/Screenshot 2025-04-25 at 22-29-45 UK Social Work Legislation Chatbot.png';
import socialCareTestSiteImage from '../assets/photo-1464998857633-50e59fbf2fe6.avif';

const INITIAL_ITEMS_VISIBLE = 6; // Define how many items to show initially

const HomePage = () => {
    // Define portfolio items array (copied from PortfolioPage.jsx)
    const portfolioItems = [
        { id: 1, title: 'Church Music Project', description: 'Producing a website to share music resources for church musicians.', link: 'https://sttimssheffieldmusic.netlify.app/', imageUrl: churchMusicImage },
        { id: 2, title: 'FCC Technical Documentation Page', description: 'This is a clone of MDN HTML documentation page.', link: 'https://fcc-technical-documentation-page-cr.netlify.app/', imageUrl: htmlTechnicalPageClone },
        { id: 3, title: 'Christmas API', description: 'An API that generates Christmas-themed data.', link: 'https://christmas-api.netlify.app/', imageUrl: christmasAPIImage },
        { id: 4, title: 'CR Emojis', description: 'An API that allows you to add your own emojis to your projects.', link: 'https://cr-emojis.netlify.app/', imageUrl: crEmojisAPI },
        { id: 5, title: 'CR Guide to Sheffield', description: 'A guide to Sheffield, including places to visit and things to do.', link: 'https://crsheffieldhometown.netlify.app/', imageUrl: crGuideToSheffield },
        { id: 6, title: 'UK Social Work Legislation Chatbot', description: 'Currently in development, this chatbot will provide information on UK social work legislation.', link: 'https://uk-socialwork-legislation-chatbot.netlify.app/', imageUrl: ukSWLegislationChatbot },
        { id: 7, title: 'Social Care Test Site', description: 'Made using Bolt.new, this site is a test site for social care.', link: 'https://bolt-socialcaretestsite.netlify.app/', imageUrl: socialCareTestSiteImage },
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