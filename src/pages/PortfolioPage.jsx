import React from 'react';
import PortfolioItem from "../components/PortfolioItem.jsx";
// import './PortfolioPage.css';

const PortfolioPage = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Church Music Project',
            description: 'Producing a website to share music resources for church musicians.',
            link: 'https://sttimssheffieldmusic.netlify.app/',
            // imageUrl: '/path/to/image1.jpg',
        },
        {
            id: 2,
            title: 'FCC Technical Documentation Page',
            description: 'This is a clone of MDN HTML documentation page.',
            link: 'https://fcc-technical-documentation-page-cr.netlify.app/',
            // imageUrl: '/path/to/image2.jpg',
        },
        {
            id: 3,
            title: 'Freelancing Website',
            description: 'A simple freelancing website to showcase my skills and projects.',
            link: 'https://fcc-crfreelancingpage.netlify.app/',
            // imageUrl: '/path/to/image3.jpg',
        },
    ];

    return (
        <div className="portfolio-page container">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {portfolioItems.map(item => (
                    <PortfolioItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        projectUrl={item.link}
                        // imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;