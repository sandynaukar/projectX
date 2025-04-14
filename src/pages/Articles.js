import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

const PageContainer = styled.div`
  background: var(--body-bg);
  min-height: 100vh;
  padding: 4rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--accent);
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'var(--accent)' : 'var(--header-bg)'};
  color: var(--text-bright);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: var(--accent);
    transform: translateY(-2px);
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ArticleCard = styled(motion.article)`
  background: var(--header-bg);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--accent);
  color: var(--text-bright);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-bright);
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const ArticleExcerpt = styled.p`
  color: var(--text-main);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    color: var(--text-bright);
  }
`;

const SchemeHighlight = styled(motion.div)`
  background: linear-gradient(135deg, var(--header-bg) 0%, rgba(42, 157, 143, 0.1) 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 4rem 0;
  border: 1px solid rgba(42, 157, 143, 0.2);
`;

const SchemeTitle = styled.h2`
  color: var(--accent);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
`;

const articles = [
  {
    id: 1,
    title: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",
    excerpt: "Learn about the micro-credit facility for street vendors with special benefits and incentives.",
    image: "/images/art/art1.jpg",
    category: "Schemes",
    tag: "Government Scheme"
  },
  {
    id: 2,
    title: "Digital Payment Success Stories",
    excerpt: "How street vendors increased their sales by 40% through digital payment adoption.",
    image: "/images/art/art2.jpg",
    category: "Success Stories",
    tag: "Digital Innovation"
  },
  {
    id: 3,
    title: "Hygiene Best Practices Guide",
    excerpt: "Essential tips for maintaining food safety and hygiene standards for street food vendors.",
    image: "/images/art/art3.jpg",
    category: "Guidelines",
    tag: "Health & Safety"
  },
  {
    id: 4,
    title: "Street Vendor Rights & Protection Act",
    excerpt: "Understanding your rights and protections under the Street Vendors Act, 2014.",
    image: "/images/art/art4.jpg",
    category: "Legal",
    tag: "Legal Rights"
  },
  {
    id: 5,
    title: "Marketing Tips for Street Vendors",
    excerpt: "Simple yet effective marketing strategies to attract more customers to your stall.",
    image: "/images/art/art5.jpg",
    category: "Business Tips",
    tag: "Marketing"
  },
  {
    id: 6,
    title: "Sustainable Vending Practices",
    excerpt: "Guide to eco-friendly packaging and sustainable business practices for vendors.",
    image: "/images/art/art6.jpg",
    category: "Guidelines",
    tag: "Sustainability"
  }
];

const schemes = [
  {
    title: "PM SVANidhi Scheme",
    description: "Working capital loan up to ₹10,000 for street vendors",
    benefits: ["Interest subsidy", "Digital transaction rewards", "Quick approval"]
  },
  {
    title: "Vendor Registration Drive",
    description: "Free registration and ID cards for street vendors",
    benefits: ["Legal recognition", "Access to schemes", "Protection from harassment"]
  }
];

function Articles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Schemes', 'Success Stories', 'Guidelines', 'Legal', 'Business Tips'];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <PageBackground>
      <div className="content">
        <PageContainer>
          <ContentWrapper>
            <Header>
              <Title>Articles & Schemes</Title>
              <CategoryTabs>
                {categories.map(category => (
                  <Tab 
                    key={category}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Tab>
                ))}
              </CategoryTabs>
            </Header>

            <ArticleGrid>
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ArticleImage src={article.image} alt={article.title} />
                  <ArticleTag>{article.tag}</ArticleTag>
                  <ArticleContent>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                    <ReadMoreButton>Read More</ReadMoreButton>
                  </ArticleContent>
                </ArticleCard>
              ))}
            </ArticleGrid>

            {schemes.map((scheme, index) => (
              <SchemeHighlight
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <SchemeTitle>{scheme.title}</SchemeTitle>
                <ArticleExcerpt>{scheme.description}</ArticleExcerpt>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {scheme.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'var(--accent)',
                        color: 'var(--text-bright)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}
                    >
                      ✨ {benefit}
                    </span>
                  ))}
                </div>
              </SchemeHighlight>
            ))}
          </ContentWrapper>
        </PageContainer>
      </div>
    </PageBackground>
  );
}

export default Articles; 