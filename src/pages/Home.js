import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 255, 213, 0.05) 0%, transparent 70%);
    z-index: 0;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  z-index: 1;
`;

const GreenText = styled.span`
  color: var(--accent);
  text-shadow: 0 0 15px rgba(0, 255, 213, 0.3);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #a8a8a8;
  max-width: 800px;
  margin: 0 auto 2rem;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  z-index: 1;
`;

const DiscoverButton = styled(motion.button)`
  background: linear-gradient(45deg, var(--accent), #00b4d8);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #00b4d8, var(--accent));
    z-index: -1;
    transition: 0.5s;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: rgba(0, 255, 213, 0.1);
  z-index: 0;
`;

const StatsSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  p {
    color: #a8a8a8;
    font-size: 1.1rem;
  }
`;

function Home() {
  return (
    <HeroSection>
      {/* Animated background circles */}
      <FloatingCircle
        size={200}
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '20%', left: '10%' }}
      />
      <FloatingCircle
        size={150}
        initial={{ x: 100, y: 100 }}
        animate={{ 
          x: [100, -100, 100],
          y: [100, -100, 100],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ bottom: '20%', right: '10%' }}
      />

      <Title
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Supporting Local <GreenText>Street</GreenText><br /><GreenText>Vendors</GreenText>
      </Title>
      
      <Subtitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Connecting communities with authentic local experiences and flavors
      </Subtitle>

      <Link to="/vendors" style={{ textDecoration: 'none' }}>
        <DiscoverButton
          whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(0, 255, 213, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover Vendors
        </DiscoverButton>
      </Link>

      <StatsSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <StatCard whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 255, 213, 0.1)' }}>
          <h3>500+</h3>
          <p>Active Vendors</p>
        </StatCard>
        <StatCard whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 255, 213, 0.1)' }}>
          <h3>50K+</h3>
          <p>Happy Customers</p>
        </StatCard>
        <StatCard whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 255, 213, 0.1)' }}>
          <h3>20+</h3>
          <p>Cities Covered</p>
        </StatCard>
      </StatsSection>
    </HeroSection>
  );
}

export default Home; 