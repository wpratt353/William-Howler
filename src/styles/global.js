import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /* stylelint-disable-next-line */
    vertical-align: baseline;
  }

  html, body {
    width: 100%; 
    height: 100%;
  }
  .siteRoot {
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    position: relative;
    z-index: 2;
    margin-bottom: 75vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.serif};
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  a {
    text-decoration: none;
    transition: all ease-in-out 0.2s;
    color: ${({ theme }) => theme.colors.black};

    :hover {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: none;
    }
  }

  * {
    :focus,
    :active {
        outline: none;
        border: none;
    }
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.sans};
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  /*! locomotive-scroll v3.5.4 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
  html.has-scroll-smooth {
    overflow: hidden; 
  }
  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
  }
  .has-scroll-smooth body {
    overflow: hidden; 
  }
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh; 
  }
  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100vh;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0; 
  }
  .c-scrollbar:hover {
    transform: scaleX(1.45); 
  }
  .c-scrollbar:hover, 
  .has-scroll-scrolling .c-scrollbar, 
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }
  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
    z-index: 99999;
  }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`
export default GlobalStyle
