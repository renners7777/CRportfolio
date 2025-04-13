import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const PortfolioPage = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Church Music Project',
            description: 'Producing a website to share music resources for church musicians.',
            link: 'https://sttimssheffieldmusic.netlify.app/',
        },
        {
            id: 2,
            title: 'FCC Technical Documentation Page',
            description: 'This is a clone of MDN HTML documentation page.',
            link: 'https://fcc-technical-documentation-page-cr.netlify.app/',
        },
        {
            id: 3,
            title: 'Freelancing Website',
            description: 'A simple freelancing website to showcase my skills and projects.',
            link: 'https://fcc-crfreelancingpage.netlify.app/',
        },
    ];

    return (
        <div className="portfolio-page">
            <h1>My Portfolio</h1>
            <div className="portfolio-items">
                {portfolioItems.map(item => (
                    <PortfolioItem 
                        key={item.id} 
                        title={item.title} 
                        description={item.description} 
                        link={item.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;