import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: 
    radial-gradient(circle at top left, rgba(0, 255, 213, 0.15) 0%, transparent 50%),
    radial-gradient(circle at top right, rgba(0, 179, 216, 0.15) 0%, transparent 50%),
    radial-gradient(circle at bottom left, rgba(0, 255, 170, 0.15) 0%, transparent 50%),
    radial-gradient(circle at bottom right, rgba(0, 213, 255, 0.15) 0%, transparent 50%);
`;

const VendorContainer = styled.div`
  padding: 4rem 2rem;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  background: linear-gradient(45deg, var(--accent), #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 255, 213, 0.3);
`;

const VendorGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const VendorCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 1.4rem;
    color: #e0e0e0;
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    color: #a8a8a8;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.5rem;
  }
`;

const Tag = styled.span`
  background: rgba(0, 255, 213, 0.1);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  color: #a8a8a8;
  font-family: 'Poppins', sans-serif;
  margin-top: 1rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const Rating = styled.div`
  color: #ffd700;
  font-size: 1.1rem;
  margin-top: 1rem;
  font-family: 'Poppins', sans-serif;
`;

function Vendors() {
  const vendors = [
    {
      name: "Tasty Street Foods",
      type: "Food Stall",
      description: "Authentic local street food with a modern twist. Specializing in traditional snacks and beverages.",
      location: "Anna Nagar, Chennai",
      rating: "4.8",
      tags: ["Street Food", "Snacks", "Beverages"]
    },
    {
      name: "Fresh Fruits Express",
      type: "Mobile Vendor",
      description: "Fresh, seasonal fruits and cut fruit platters. Daily fresh stock from local farmers.",
      location: "T Nagar, Chennai",
      rating: "4.7",
      tags: ["Fruits", "Healthy", "Fresh"]
    },
    {
      name: "Chennai Chaat Corner",
      type: "Food Cart",
      description: "Popular street-side chaat and snacks. Known for unique flavors and quick service.",
      location: "Mylapore, Chennai",
      rating: "4.9",
      tags: ["Chaat", "Snacks", "Fast Food"]
    },
    // Add more vendors as needed
  ];

  return (
    <MainContainer>
      <VendorContainer>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Street Vendors
        </PageTitle>
        
        <VendorGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {vendors.map((vendor, index) => (
            <VendorCard
              key={index}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 20px rgba(0, 255, 213, 0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2>{vendor.name}</h2>
              <h3>{vendor.type}</h3>
              <p>{vendor.description}</p>
              <div>
                {vendor.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
              <Location>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                {vendor.location}
              </Location>
              <Rating>★ {vendor.rating}</Rating>
            </VendorCard>
          ))}
        </VendorGrid>
      </VendorContainer>
    </MainContainer>
  );
}

export default Vendors; 