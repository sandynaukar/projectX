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
  "/images/maincards/craft/1.jpg",  // Main shop view
  "/images/maincards/craft/2.jpg",  // Handmade jewelry
  "/images/maincards/craft/3.jpg",  // Pottery items
  "/images/maincards/craft/4.jpg",  // Workshop session
  "/images/maincards/craft/5.jpg"   // Traditional crafts
];

const menuItems = [
  { name: "Handmade Jewelry", price: "From ₹299" },
  { name: "Ceramic Pottery", price: "From ₹499" },
  { name: "Wall Art", price: "From ₹999" },
  { name: "Traditional Crafts", price: "From ₹399" },
  { name: "Custom Orders", price: "Price on Request" },
  { name: "Workshop Sessions", price: "₹1500/person" }
];

function CraftCorner() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageBackground>
      <PageContainer>
        <Content>
          <BackButton onClick={() => navigate('/vendors')}>
            ← Back to Vendors
          </BackButton>

          <VendorTitle>Handcraft Corner</VendorTitle>

          <Gallery>
            <MainImage 
              src={vendorImages[selectedImage]} 
              alt="Handcraft Corner"
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
              Handcraft Corner celebrates traditional artisanship with modern designs. 
              Our artisans create unique pieces that blend cultural heritage with 
              contemporary aesthetics. Each piece tells a story of craftsmanship and dedication. 
              We also conduct workshops to keep traditional craft techniques alive.
            </InfoText>
            <div style={{ marginTop: '1rem' }}>
              <SpecialtyTag>Handmade Items</SpecialtyTag>
              <SpecialtyTag>Traditional Crafts</SpecialtyTag>
              <SpecialtyTag>Custom Orders</SpecialtyTag>
              <SpecialtyTag>Craft Workshops</SpecialtyTag>
            </div>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Featured Collections</InfoTitle>
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
            <InfoTitle>Workshop Schedule</InfoTitle>
            <InfoText>
              Join our craft workshops and learn traditional techniques:
              • Basic Pottery (Saturdays)
              • Jewelry Making (Sundays)
              • Traditional Art (Weekday Evenings)
              • Special Holiday Workshops
            </InfoText>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Custom Orders</InfoTitle>
            <InfoText>
              We welcome custom orders for:
              • Wedding Favors
              • Corporate Gifts
              • Special Occasions
              • Personalized Items
            </InfoText>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Visit Us</InfoTitle>
            <ContactInfo>
              <InfoText>📍 Artisan Market, Cultural Zone</InfoText>
              <InfoText>⏰ Open: 10:00 AM - 8:00 PM (Closed Mondays)</InfoText>
              <InfoText>📞 Contact: +91 98765 43215</InfoText>
              <InfoText>�� Workshop bookings: craft.corner@email.com</InfoText>
            </ContactInfo>
          </InfoSection>
        </Content>
      </PageContainer>
    </PageBackground>
  );
}

export default CraftCorner; 