import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background: var(--body-bg);
  min-height: 100vh;
  padding: 4rem 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--accent);
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-main);
  max-width: 600px;
  margin: 0 auto;
`;

const VendorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const VendorCard = styled(motion.div)`
  background: var(--header-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);

    img {
      transform: scale(1.05);
    }

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '→ Click to view details';
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: var(--accent);
    color: var(--text-bright);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const VendorImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  transition: transform 0.4s ease;
  background: var(--header-bg);
  padding: 1rem;
`;

const VendorInfo = styled.div`
  padding: 1.5rem;
`;

const VendorName = styled.h3`
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
`;

const VendorLocation = styled.p`
  color: var(--text-main);
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const VendorMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Rating = styled.span`
  background: rgba(0, 191, 166, 0.1);
  color: var(--accent);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Experience = styled.span`
  color: var(--text-main);
  font-size: 0.9rem;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ItemTag = styled.span`
  background: var(--header-bg);
  color: var(--text-main);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Speciality = styled.p`
  color: var(--text-bright);
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 0.5rem;
`;

const vendors = [
  {
    id: "rajs-street-food",
    name: "Raj's Street Food Corner",
    location: "Gandhi Market, Street 4",
    image: "/images/vendors1.jpg",
    items: ["Pani Puri", "Samosa", "Chaat"],
    rating: "4.8",
    speciality: "Famous for Pani Puri",
    yearsActive: "15+ Years",
    path: "/vendor/rajs-street-food"
  },
  {
    id: "fresh-fruits-maya",
    name: "Fresh Fruits by Maya",
    location: "Central Plaza, Shop 12",
    image: "/images/vendors2.jpg",
    items: ["Seasonal Fruits", "Fresh Juices", "Fruit Salads"],
    rating: "4.6",
    speciality: "Organic Produce",
    yearsActive: "8+ Years",
    path: "/vendor/fresh-fruits-maya"
  },
  {
    id: "authentic-dosa",
    name: "Authentic Dosa Point",
    location: "Lake View Road",
    image: "/images/vendors3.jpg",
    items: ["Masala Dosa", "Idli", "Vada"],
    rating: "4.9",
    speciality: "South Indian Delicacies",
    yearsActive: "20+ Years",
    path: "/vendor/authentic-dosa"
  },
  {
    id: "veggie-market",
    name: "Fresh Vegetable Market",
    location: "Morning Market Complex",
    image: "/images/vendors4.jpg",
    items: ["Fresh Vegetables", "Organic Produce", "Local Herbs"],
    rating: "4.7",
    speciality: "Farm Fresh Vegetables",
    yearsActive: "12+ Years",
    path: "/vendor/veggie-market"
  },
  {
    id: "fashion-hub",
    name: "Street Fashion Hub",
    location: "Fashion Street, Lane 2",
    image: "/images/vendors5.jpg",
    items: ["Trendy Clothes", "Accessories", "Bags"],
    rating: "4.5",
    speciality: "Latest Fashion Trends",
    yearsActive: "5+ Years",
    path: "/vendor/fashion-hub"
  },
  {
    id: "craft-corner",
    name: "Handcraft Corner",
    location: "Artisan Market",
    image: "/images/vendors6.jpg",
    items: ["Handmade Jewelry", "Pottery", "Art Pieces"],
    rating: "4.8",
    speciality: "Traditional Crafts",
    yearsActive: "10+ Years",
    path: "/vendor/craft-corner"
  }
];

function Posters() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header>
        <Title>Discover Local Vendors</Title>
        <Subtitle>
          Explore our vibrant community of street vendors offering authentic products and experiences
        </Subtitle>
      </Header>

      <VendorGrid>
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            onClick={() => navigate(vendor.path)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <VendorImage src={vendor.image} alt={vendor.name} />
            <VendorInfo>
              <VendorName>{vendor.name}</VendorName>
              <VendorLocation>
                📍 {vendor.location}
              </VendorLocation>
              <VendorMeta>
                <Rating>⭐ {vendor.rating}</Rating>
                <Experience>{vendor.yearsActive}</Experience>
              </VendorMeta>
              <ItemsContainer>
                {vendor.items.map((item, index) => (
                  <ItemTag key={index}>{item}</ItemTag>
                ))}
              </ItemsContainer>
              <Speciality>✨ {vendor.speciality}</Speciality>
            </VendorInfo>
          </VendorCard>
        ))}
      </VendorGrid>
    </PageContainer>
  );
}

export default Posters; 