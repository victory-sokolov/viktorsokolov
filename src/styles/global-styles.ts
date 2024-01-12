"use client";

import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;   // 10px

    /* Text sizing */
    --text-sm: 1.2rem;   // 12px
    --text-base: 1.6rem; // 16px, base
    --text-md: 2rem;     // 20px
    --text-lg: 2.2rem;   // 24px
    --text-xl: 2.8rem;   // 28px
    --text-xxl: 3.2rem;  // 32px
    --text-xxxl: 3.6rem; // 36px

    /* Spacing */
    --space-unit: 1.6rem; // 16px
    --space-xxs:  calc(0.25 * var(--space-unit)); // 4px
    --space-xs:   calc(0.5 * var(--space-unit));  // 8px
    --space-sm:   calc(0.75 * var(--space-unit)); // 12px
    --space-md:   calc(1.25 * var(--space-unit)); // 20px
    --space-lg:   calc(2 * var(--space-unit));    // 32px
    --space-xl:   calc(3.25 * var(--space-unit)); // 52px
    --space-xxl:  calc(5.25 * var(--space-unit)); // 84px

    /* Font weight */
    --font-light: 300;
    --font-medium: 500;
    --font-bold: 700;

    /* Colors */
    --color-primary: #030936;
    --color-primary-600: #02051e;

    --color-secondary: #9b87ff;
    --color-secondary-600: #866dff;
    --color-secondary-700: #5b3aff;
    --color-secondary-800: #3107ff;
    --color-secondary-900: #2300d3;

    --black: #2E2E2E;
    --white: #fff;
    --selection: #364fc7;
    --tip-box-shadow-color: #fff;
    --code: #fff;
    --code-background: #2b303b99;
    --light-shadow: 0 5px 10px rgba(154,160,185,.5), 0 15px 40px rgba(166,173,201,.2);
    --hover-shadow: 0 25px 50px rgba(154,160,185,.5), 0 35px 80px rgba(166,173,201,.2);
    --box-shadow-px: 20px;
    --scrollbar-color: #d6d6d6;

    --link-color: #fff;
    --code: #97a2f3;
    --text-color-primary: #fff;
    --text-color-secondary: #FFB90B;
    --background-color: #03082a;
    --tip-box-shadow-color: #134c79;
    --light-shadow: none;
    --box-shadow-px: 70px;

    --link-color: #fff;
    --code: #97a2f3;
    --text-color-primary: #fff;
    --text-color-secondary: #FFB90B;
    --background-color: #03082a;
    --tip-box-shadow-color: #134c79;
    --light-shadow: none;
    --box-shadow-px: 70px;

    --accent-gradient: linear-gradient(
            60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359.18367346938777, 84.97109826589593%, 66.07843137254902%),
            hsl(44, 85%, 66%),
            hsl(89, 85%, 66%),
            hsl(134, 85%, 66%),
            hsl(179, 85%, 66%)
        );
  }

  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: local('Oxygen'), url('../fonts/Montserrat-Medium.ttf') format('truetype');
    font-display: swap;
  }

  @supports (font: -apple-system-body) and (-webkit-appearance: none) { 
    img[loading="lazy"] { 
        clip-path: inset(0.6px) 
    } 
  }

  @media (prefere-reduced-motion: no-preference) {
	:focus {
		transition: outline-offset .25s ease;
		outline-offset: 5px;
	}
  }   

  *, *:before, *:after {
    box-sizing: border-box;
    padding:0;
    margin: 0;
  }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            scroll-behavior: smooth;
        }
    }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-color);
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: var(--background-color);
    color: var(--text-color-primary);
    font-size: 1.8rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    height: 100vh;
    line-height: 1.618;
  }

  ::selection {
    background-color: var(--selection);
    color: var(--white);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    color: var(--text-primary-color);
    padding: .8rem;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    background: none;
    font-size: var(--text-base);
    letter-spacing: .6px;
    border: 2px solid var(--color-secondary-700);
    font-weight: var(--font-medium);

    &:hover {
        box-shadow: 0 0 0 1px var(--color-secondary-700);
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
    height: 100%;
  }

  ul {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    font-size: var(--text-base);
    line-height: calc(18px * 1.618);
    color: var(--link-color);
    &:hover {
        color: var(--color-secondary-600);
    }
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    line-height: calc(1.8rem * 1.618);
    text-wrap: balance;
  }

  input {
    border: 1px solid var(--color-secondary-700);
    background: none;
    width: 100%;
    padding: 1.6rem;
    border-radius: 4px;
    color: var(--text-color-primary);
    font-size: var(--text-base);
    text-align: left;
  }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid green;
        -webkit-text-fill-color: var(--color-secondary);
        -webkit-box-shadow: 0 0 0 1000px #000 inset;
        box-shadow: 0 0 0 1000px #000 inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    input:focus,
    input:active {
        outline: 1px solid var(--color-secondary-900);
        background: none;
    }

    .tilt {
        transform: rotate(-2deg);
        position: relative;
        display: inline-block;
    }

  a.anchor > svg {
        fill: var(--background-color);
        padding-right: .4rem;
        position: relative;
        top: 1rem;
    }

   code {
        font-size: var(--text-base);
        line-height: 3rem;
        padding: 0.3rem 0.6rem;
        display: block;
    }

    code:not(:has(pre, span, div)) {
        display: inline;
        color: var(--code);
        background-color: var(--code-background);
        border: 1px solid var(--color-secondary);
        border-radius: 5px;
        line-height: 3.8rem;
    }

    pre {
        font-size: var(--text-base);
        padding: .8rem;
        margin-top: 1rem;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-bottom: 2.5rem;
        position: relative;
        tab-size: 2;
        overflow-x: auto;
    }

  /* Custom */

  .active {
    color: var(--color-secondary-600);
  }

  .not-found-text {
    font-size: var(--font-size-xl);
  }

  .center {
        text-align: center;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .underline {
    &:before {
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background: var(--link-color);
      transform: scaleX(0);
    }
    &:hover:before {
      transform: scaleX(1);
    }
}

    a.mdx-link {
        color: var(--color-secondary);
        &:hover {
            color: var(--color-secondary-600);
            text-decoration: underline;
        }
    }

.sticky {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.5s ease-in-out;
    animation: smoothScroll 1s forwards;
    background-color: rgb(46, 52, 64, 0.5);
    backdrop-filter: blur(8px);
    color: #fff;
}

.flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}


.anchor {
    margin: 1.2rem 0;
    scroll-margin-top: 12rem;
    &:hover {
        &:before {
            content: '#';
            font-size: 24px;
            position: absolute;
            transform: translate(-.8em, -1px);
            width: .8em;
        }
    }
}

.wavy {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes smoothScroll {
  0% {
    transform: translateY(-142px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}

    @media only screen and (max-width: 640px) {
        html {
            font-size: 1.5rem;
        }
    }

`;

export const borderGradient = css`
    --border-width: 3px;
    position: relative;
    background: var(--background-color);
    border-radius: var(--border-width);
    animation: moveGradient 4s alternate infinite;

    &::after {
        border: none;
        transition: 0.5s ease-in-out;
        position: absolute;
        content: "";
        top: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        z-index: -1;
        width: calc(100% + var(--border-width) * 2);
        height: calc(100% + var(--border-width) * 2);
        background: var(--accent-gradient);
        background-size: 300% 300%;
        background-position: 0 50%;
        border-radius: calc(2 * var(--border-width));
        transition: 0.7s;
    }
`;

const ContainerStyle = styled.div`
    flex-grow: 1;
    margin-top: 6rem;
    padding-bottom: 5rem;
    position: relative;
`;

const MainStyles = styled.div`
    max-width: 85rem;
    padding-left: 4rem;
    padding-right: 4rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;

const ContentWrapper = styled.article`
    margin: 0 auto;
    margin-top: var(--text-md);
    position: relative;
    line-height: 32px;

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 0;
        background: none;
        box-shadow: none;
        max-width: 100%;
        position: relative;
        bottom: 0;

        .image-wrapper {
            img {
                height: 25rem;
            }
        }
    }
`;

export { GlobalStyles, ContainerStyle, MainStyles, ContentWrapper };
