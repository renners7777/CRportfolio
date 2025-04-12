import React from 'react';

const PortfolioItem = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="portfolio-item">
            <img src={imageUrl} alt={title} className="portfolio-image" />
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
            <a href={projectUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
};

export default PortfolioItem;