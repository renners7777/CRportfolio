import React from 'react';
import PortfolioItem from "../components/PortfolioItem.jsx";
import '../styles/css/PortfolioPage.css'; // Corrected path assuming CSS is in pages

// Import the image file directly
import churchMusicImage from '../assets/photo-1663619079733-c22429418bc2.avif';
// Import other images similarly if they are in src/assets
import htmlTechnicalPageClone from '../assets/Screenshot 2025-04-13 at 16-02-12 HTML technical documentation page.png';
import christmasAPIImage from '../assets/christmasAPIImage.avif';
import crEmojisAPI from '../assets/CR-emojis.png';
import image5 from '../assets/placeholder5.png'; 
import image6 from '../assets/placeholder6.png'; 


const PortfolioPage = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Church Music Project',
            description: 'Producing a website to share music resources for church musicians.',
            link: 'https://sttimssheffieldmusic.netlify.app/',
            // Use the imported variable
            imageUrl: churchMusicImage,
        },
        {
            id: 2,
            title: 'FCC Technical Documentation Page',
            description: 'This is a clone of MDN HTML documentation page.',
            link: 'https://fcc-technical-documentation-page-cr.netlify.app/',
            // Use imported variable or placeholder/public path
            imageUrl: htmlTechnicalPageClone, // Replace if using import: image2
        },
        {
            id: 3,
            title: 'Christmas API',
            description: 'An API that generates Christmas-themed data.',
            link: 'https://christmas-api.netlify.app/',
            // Use imported variable or placeholder/public path
            imageUrl: christmasAPIImage, // Replace if using import: image3
        },
        // Add more items as needed
        {
            id: 4,
            title: 'CR Emojis',
            description: 'An API that allows you to add your own emojis to your projects.',
            link: 'https://cr-emojis.netlify.app/',
            imageUrl: crEmojisAPI, 
        },
        {
            id: 5,
            title: 'Project 5',
            description: 'Description for project 5.',
            link: '#',
            imageUrl: 'https://via.placeholder.com/150', // Placeholder image
        },
        {
            id: 6,
            title: 'Project 6',
            description: 'Description for project 6.',
            link: '#',
            imageUrl: 'https://via.placeholder.com/150', // Placeholder image
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
                        // imageUrl prop now receives the correct path from Vite
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;