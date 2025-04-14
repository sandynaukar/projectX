import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --body-bg: #1a1a1a;
    --header-bg: #242424;
    --text-main: #ffffff;
    --accent: #00ffd5;
  }

  body {
    background: var(--body-bg);
    color: var(--text-main);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* Enhanced vibrant background for all pages except home */
  .page-container {
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
      background: 
        radial-gradient(circle at top left, rgba(0, 255, 213, 0.15) 0%, transparent 50%),
        radial-gradient(circle at top right, rgba(0, 179, 216, 0.15) 0%, transparent 50%),
        radial-gradient(circle at bottom left, rgba(0, 255, 170, 0.15) 0%, transparent 50%),
        radial-gradient(circle at bottom right, rgba(0, 213, 255, 0.15) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }
  }

  /* Ensure content stays above the gradient */
  .content {
    position: relative;
    z-index: 1;
  }

  /* Home page keeps its existing styles */
  .home-container {
    .floating-circles {
      display: block;
    }
  }
`;

export default GlobalStyles; 