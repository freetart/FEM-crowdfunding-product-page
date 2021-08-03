import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --black: #000;
    --white: #fff;
    /* primary */
    --moderateCyan: hsl(176, 50%, 47%);
    --darkCyan: hsl(176, 72%, 28%);
    /* neutral */
    --darkGray: hsl(0, 0%, 48%);
    --lightGray: #f2f2f2;
    /* radius */
    --mainRadius: 1rem;
    --secondaryRadius: 5rem;
    /* shadows */
    --mainShadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, .1);
    /* transitions */
    --mainTransition: all 0.3s ease-in-out;
    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.7rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Commissioner", sans-serif;
    overflow-x: hidden;
    background-color: var(--lightGray);
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
