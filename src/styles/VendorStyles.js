import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
  background: var(--body-bg);
  min-height: 100vh;
  padding: 2rem;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 213, 0.1);
  border: 1px solid rgba(0, 255, 213, 0.2);
  color: var(--accent);
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 2rem 0;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(0, 255, 213, 0.15);
    border-color: rgba(0, 255, 213, 0.3);
    transform: translateX(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 213, 0.1);
  }

  &:active {
    transform: translateX(-2px);
  }
`;

export const VendorTitle = styled.h1`
  font-size: 3rem;
  color: var(--accent);
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const ImageCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const StallImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
`;

export const InfoSection = styled.div`
  background: var(--header-bg);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
`;

export const InfoTitle = styled.h2`
  color: var(--text-bright);
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;
`;

export const InfoText = styled.p`
  color: var(--text-main);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const SpecialtyTag = styled.span`
  background: var(--accent);
  color: var(--text-bright);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 1rem;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const MenuItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
`;

export const Price = styled.span`
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
  display: block;
  margin-top: 0.5rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  color: var(--text-bright);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent);
  }
`;

export const Gallery = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  box-shadow: 0 8px 20px rgba(0, 255, 213, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.01);
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.5rem;
  justify-content: center;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 255, 213, 0.05);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 213, 0.2);
    border-radius: 10px;
    
    &:hover {
      background: rgba(0, 255, 213, 0.3);
    }
  }
`;

export const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.selected ? 'var(--accent)' : 'transparent'};
  opacity: ${props => props.selected ? 1 : 0.7};
  
  &:hover {
    transform: translateY(-5px);
    opacity: 1;
    box-shadow: 0 5px 15px rgba(0, 255, 213, 0.2);
  }
`; 