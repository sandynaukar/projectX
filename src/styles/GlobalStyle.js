import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

  :root {
    --header-bg: #1A1A1A;     // Dark charcoal for header/footer
    --body-bg: #242424;       // Slightly lighter for body
    --text-bright: #FFFFFF;   // Bright white for important text
    --text-main: #E0E0E0;     // Light gray for regular text
    --accent: #00BFA6;        // Vibrant teal for accents
    --accent-hover: #00A090;  // Darker teal for hover states
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--body-bg);
    color: var(--text-main);
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-bright);
    font-weight: 700;
    letter-spacing: -0.02em;
  }
`;

export default GlobalStyle; 