import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: var(--header-bg);
  padding: 4rem 2rem 2rem 2rem;
  color: var(--text-main);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--text-bright);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: var(--text-main);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent);
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 0.8rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--text-main);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-main);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>Supporting local street vendors and creating sustainable communities through digital innovation.</p>
          <SocialLinks>
            <SocialIcon href="#" target="_blank">📱</SocialIcon>
            <SocialIcon href="#" target="_blank">💌</SocialIcon>
            <SocialIcon href="#" target="_blank">📘</SocialIcon>
            <SocialIcon href="#" target="_blank">📸</SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/posters">Posters</FooterLink>
          <FooterLink to="/csr">CSR Initiatives</FooterLink>
          <FooterLink to="/articles">Articles</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Resources</h3>
          <FooterLink to="#">Vendor Registration</FooterLink>
          <FooterLink to="#">Customer Support</FooterLink>
          <FooterLink to="#">FAQs</FooterLink>
          <FooterLink to="#">Privacy Policy</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <ContactInfo>
            <p>📍 123 Street Vendor Lane</p>
            <p>🏢 Local Market District</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@streetvendor.com</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Street Vendor Connect. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 