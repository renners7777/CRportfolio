import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const PortfolioPage = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://example.com/project-one',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://example.com/project-two',
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://example.com/project-three',
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