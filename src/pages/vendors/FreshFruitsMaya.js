import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  PageContainer,
  Content,
  BackButton,
  VendorTitle,
  Gallery,
  MainImage,
  Thumbnails,
  Thumbnail,
  InfoSection,
  InfoTitle,
  InfoText,
  SpecialtyTag,
  MenuGrid,
  MenuItem,
  Price,
  ContactInfo
} from '../../styles/VendorStyles';
import styled from 'styled-components';

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

const vendorImages = [
  "/images/maincards/maya/1.jpg",  // Main stall view
  "/images/maincards/maya/2.jpg",  // Fresh fruits display
  "/images/maincards/maya/3.jpg",  // Juice counter
  "/images/maincards/maya/4.jpg",  // Seasonal fruits
  "/images/maincards/maya/5.jpg"   // Fruit salad preparation
];

const menuItems = [
  { name: "Fresh Mango", price: "₹120/kg" },
  { name: "Mixed Fruit Juice", price: "₹60" },
  { name: "Fruit Salad", price: "₹80" },
  { name: "Apple", price: "₹180/kg" },
  { name: "Orange", price: "₹90/kg" },
  { name: "Seasonal Special", price: "Market Price" }
];

function FreshFruitsMaya() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageBackground>
      <PageContainer>
        <Content>
          <BackButton onClick={() => navigate('/vendors')}>
            ← Back to Vendors
          </BackButton>

          <VendorTitle>Fresh Fruits by Maya</VendorTitle>

          <Gallery>
            <MainImage 
              src={vendorImages[selectedImage]} 
              alt="Fresh Fruits by Maya"
            />
            <Thumbnails>
              {vendorImages.map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  selected={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </Thumbnails>
          </Gallery>

          <InfoSection>
            <InfoTitle>About Us</InfoTitle>
            <InfoText>
              Maya's Fresh Fruits has been serving the community with the freshest seasonal fruits 
              for over 8 years. We take pride in sourcing directly from local farmers and ensuring 
              the highest quality fruits for our customers. Our juice bar offers refreshing drinks 
              made from 100% natural fruits.
            </InfoText>
            <div style={{ marginTop: '1rem' }}>
              <SpecialtyTag>Organic Fruits</SpecialtyTag>
              <SpecialtyTag>Fresh Juices</SpecialtyTag>
              <SpecialtyTag>Seasonal Specialties</SpecialtyTag>
            </div>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Our Products</InfoTitle>
            <MenuGrid>
              {menuItems.map((item, index) => (
                <MenuItem key={index}>
                  <InfoText>{item.name}</InfoText>
                  <Price>{item.price}</Price>
                </MenuItem>
              ))}
            </MenuGrid>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Visit Us</InfoTitle>
            <ContactInfo>
              <InfoText>📍 Central Plaza, Shop 12, Near City Mall</InfoText>
              <InfoText>⏰ Open: 8:00 AM - 8:00 PM (All Days)</InfoText>
              <InfoText>📞 Contact: +91 98765 43211</InfoText>
              <InfoText>🌟 Special discounts for bulk orders</InfoText>
            </ContactInfo>
          </InfoSection>
        </Content>
      </PageContainer>
    </PageBackground>
  );
}

export default FreshFruitsMaya; 