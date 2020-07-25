import styled from 'styled-components'

export const LogoWrap = styled.div`
  .logo {
    line-height: 1;
    font-size: 1.5rem;
    color: white;

    div:first-of-type {
      font-size: 2rem;
      position: relative;

      span {
        display: block;
        padding-left: 1.5rem;
      }
    }
    div:last-of-type {
      opacity: 0;
    }
  }
  .logo-small {
    div:first-of-type {
      opacity: 0;
      transition: opacity 0.4s;
      cursor: default;
    }
    div:last-of-type {
      opacity: 1;
      position: fixed;
      top: 1rem;
      left: 0.6rem;
      letter-spacing: -3px;
      transition: opacity 0.4s;
      color: ${(props) => props.theme.colors.tan};

      span {
        position: fixed;
        top: 1.8rem;
      }
    }
  }
`

export const Logo = styled.div``
