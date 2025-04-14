import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
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
  "/images/maincards/veggie/1.jpg",  // Main stall view
  "/images/maincards/veggie/2.jpg",  // Fresh vegetables display
  "/images/maincards/veggie/3.jpg",  // Organic produce
  "/images/maincards/veggie/4.jpg",  // Seasonal items
  "/images/maincards/veggie/5.jpg"   // Herbs collection
];

const menuItems = [
  { name: "Organic Tomatoes", price: "₹40/kg" },
  { name: "Fresh Spinach", price: "₹30/bunch" },
  { name: "Green Peas", price: "₹60/kg" },
  { name: "Local Herbs", price: "₹20/bunch" },
  { name: "Seasonal Mix", price: "₹100/kg" },
  { name: "Organic Potatoes", price: "₹35/kg" }
];

function VeggieMarket() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageBackground>
      <Content>
        <BackButton onClick={() => navigate('/vendors')}>
          ← Back to Vendors
        </BackButton>

        <VendorTitle>Fresh Vegetable Market</VendorTitle>

        <Gallery>
          <MainImage 
            src={vendorImages[selectedImage]} 
            alt="Fresh Vegetable Market"
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
            For over 12 years, we've been providing the freshest vegetables sourced directly 
            from local farmers. Our commitment to quality and freshness has made us the 
            most trusted vegetable vendor in the morning market. We specialize in organic 
            produce and offer a wide variety of seasonal vegetables and herbs.
          </InfoText>
          <div style={{ marginTop: '1rem' }}>
            <SpecialtyTag>Farm Fresh</SpecialtyTag>
            <SpecialtyTag>Organic Options</SpecialtyTag>
            <SpecialtyTag>Local Produce</SpecialtyTag>
            <SpecialtyTag>Seasonal Specials</SpecialtyTag>
          </div>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Today's Specials</InfoTitle>
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
          <InfoTitle>Why Choose Us?</InfoTitle>
          <InfoText>
            • Fresh harvest delivered daily
            • Direct partnership with local farmers
            • Organic certification for select produce
            • Competitive wholesale prices
            • Free cleaning and sorting service
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Visit Us</InfoTitle>
          <ContactInfo>
            <InfoText>📍 Morning Market Complex, Block C</InfoText>
            <InfoText>⏰ Open: 6:00 AM - 12:00 PM (All Days)</InfoText>
            <InfoText>📞 Contact: +91 98765 43213</InfoText>
            <InfoText>🌟 Special rates for restaurants and bulk orders</InfoText>
          </ContactInfo>
        </InfoSection>
      </Content>
    </PageBackground>
  );
}

export default VeggieMarket; 