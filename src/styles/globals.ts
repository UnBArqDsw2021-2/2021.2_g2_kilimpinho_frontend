import { createGlobalStyle, css } from "styled-components";

const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      color: ${theme.colors.darkGray};
    `}
  }
`;

const bodyFontStyles = css`
  ${({ theme }) => css`
    p,
    label,
    span,
    div,
    strong {
      font-family: ${theme.font.bodyFamily};
      color: ${theme.colors.darkGray};
    }

    a {
      text-decoration: none;
    }

    input {
      font-family: ${theme.font.bodyFamily};
    }
  `}
`;

export const GlobalStyles = createGlobalStyle`
   /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  
    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    /* Set core root defaults */
    html,
    html:focus-within {
      ${({ theme }) => css`
        background: ${theme.colors.white};
      `}
    }

    /* Set core body defaults */
    body {
      ${({ theme }) => css`
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        font-family: Roboto, Poppins, sans-serif, -apple-system,
          BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue',
        color: ${theme.colors.darkGray};
        background: linear-gradient(155deg, #ffffff 33%, #efefef);
        background-attachment: fixed;
      `}
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
      max-width: 100%;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }


  ${bodyFontStyles};
  ${headingStyles};

  
`;
