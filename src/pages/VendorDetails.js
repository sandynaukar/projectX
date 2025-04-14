import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const PageBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 213, 0.15) 0%,
      rgba(0, 179, 216, 0.08) 40%,
      transparent 85%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
`;

const PageContainer = styled.div`
  background: var(--body-bg);
  min-height: 100vh;
  padding: 2rem;
`;

const BackButton = styled.button`
  background: var(--header-bg);
  color: var(--text-bright);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    transform: translateX(-5px);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const VendorHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const VendorName = styled.h1`
  font-size: 3rem;
  color: var(--accent);
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const VendorLocation = styled.p`
  color: var(--text-main);
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ImageGallery = styled.div`
  margin-bottom: 4rem;
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--header-bg);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.selected ? 'var(--accent)' : 'transparent'};

  &:hover {
    transform: scale(1.05);
  }
`;

const InfoSection = styled(motion.div)`
  background: var(--header-bg);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: var(--text-bright);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ItemCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
`;

const ItemPrice = styled.p`
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const ContactButton = styled.button`
  background: var(--accent);
  color: var(--text-bright);
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 3rem auto;
  font-weight: 600;

  &:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }
`;

// Sample vendor data - in a real app, this would come from a database
const vendorData = {
  "rajs-street-food": {
    name: "Raj's Street Food Corner",
    location: "Gandhi Market, Street 4",
    description: "Serving authentic street food delicacies for over 15 years. Known for our special pani puri and innovative chat variations.",
    images: [
      "/images/vendor1.jpg",
      "/images/vendor1-2.jpg",
      "/images/vendor1-3.jpg",
      "/images/vendor1-4.jpg",
    ],
    items: [
      { name: "Pani Puri", price: "₹30" },
      { name: "Samosa", price: "₹15" },
      { name: "Bhel Puri", price: "₹40" },
      { name: "Dahi Puri", price: "₹50" },
      { name: "Masala Chai", price: "₹10" },
    ],
    timings: "11:00 AM - 9:00 PM",
    contact: "+91 98765 43210"
  },
  // Add more vendors here
};

function VendorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const vendor = vendorData[id];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <PageBackground>
      <ContentWrapper>
        <BackButton onClick={() => navigate('/posters')}>
          ← Back to Vendors
        </BackButton>

        <VendorHeader>
          <VendorName>{vendor.name}</VendorName>
          <VendorLocation>📍 {vendor.location}</VendorLocation>
        </VendorHeader>

        <ImageGallery>
          <MainImage 
            src={vendor.images[selectedImage]} 
            alt={vendor.name}
          />
          <Thumbnails>
            {vendor.images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`${vendor.name} ${index + 1}`}
                selected={selectedImage === index}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Thumbnails>
        </ImageGallery>

        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SectionTitle>About Us</SectionTitle>
          <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
            {vendor.description}
          </p>
        </InfoSection>

        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SectionTitle>Our Menu</SectionTitle>
          <ItemsGrid>
            {vendor.items.map((item, index) => (
              <ItemCard key={index}>
                <h3 style={{ color: 'var(--text-bright)' }}>{item.name}</h3>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemCard>
            ))}
          </ItemsGrid>
        </InfoSection>

        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <SectionTitle>Business Hours</SectionTitle>
          <p style={{ color: 'var(--text-main)' }}>🕐 {vendor.timings}</p>
        </InfoSection>

        <ContactButton onClick={() => window.location.href = `tel:${vendor.contact}`}>
          📞 Contact Vendor
        </ContactButton>
      </ContentWrapper>
    </PageBackground>
  );
}

export default VendorDetails; 