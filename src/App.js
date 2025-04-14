import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Posters from './pages/Posters';
import CSR from './pages/CSR';
import Articles from './pages/Articles';
import GlobalStyle from './styles/GlobalStyle';
import RajsStreetFood from './pages/vendors/RajsStreetFood';
import FreshFruitsMaya from './pages/vendors/FreshFruitsMaya';
import AuthenticDosa from './pages/vendors/AuthenticDosa';
import VeggieMarket from './pages/vendors/VeggieMarket';
import FashionHub from './pages/vendors/FashionHub';
import CraftCorner from './pages/vendors/CraftCorner';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Posters />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/vendor/rajs-street-food" element={<RajsStreetFood />} />
        <Route path="/vendor/fresh-fruits-maya" element={<FreshFruitsMaya />} />
        <Route path="/vendor/authentic-dosa" element={<AuthenticDosa />} />
        <Route path="/vendor/veggie-market" element={<VeggieMarket />} />
        <Route path="/vendor/fashion-hub" element={<FashionHub />} />
        <Route path="/vendor/craft-corner" element={<CraftCorner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
