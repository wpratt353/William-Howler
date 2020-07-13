import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export const AboutWrap = styled(Container)`
  padding-bottom: 10rem;
  position: relative;
  color: ${(props) => props.theme.colors.teal};

  .container {
    padding-left: 0;

    @media (max-width: 1278px) {
      padding-left: 4rem;
    }

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
  h3 {
    font-size: 1.875rem;
  }
  h4 {
    font-size: 1.25rem;
    display: flex;
    padding: 1.5rem 0;
    align-items: center;

    span {
      background-color: ${(props) => props.theme.colors.teal};
      color: ${(props) => props.theme.colors.white};
      position: absolute;
      right: 15px;
      display: block;
      padding: 0.25rem 0.563rem;
      transition: all 0.8s ease;
    }
  }
  .small-col {
    width: 100%;
    padding: 0 5rem;

    span {
      right: 5.9375rem;
      right: calc(5rem + 15px);
    }
  }
  .block-quote {
    padding: 10rem 2rem 8rem 8rem;

    a {
      color: ${(props) => props.theme.colors.tan};
      display: inline-flex;
      align-items: center;
      margin: 3rem auto 3rem 0;
      padding: 0.75rem;
      line-height: 1;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      text-transform: lowercase;

      span {
        padding-left: 15px;
        transition: all 0.4s;
      }

      :hover {
        padding-right: 1.5rem;

        span {
          transform: translate(0.5rem, 0);
        }
      }
    }
  }
`

export const StyledCol = styled(Col)`
  padding-bottom: 8rem;
  height: 100%;
  width: 100%;

  .about-image {
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    :before {
      transition: all 0.8s ease !important;
      position: relative !important;
    }

    :hover:before,
    :active:before {
      transform: scale(1.05);
    }
  }

  .small-image {
    height: 12.5vw;
  }
  .tall-image {
    height: 27.5vw;
  }
  .mid-image {
    height: 12.5vw;
  }

  :hover h4 span,
  :active h4 span {
    background-color: ${(props) => props.theme.colors.tan};
    color: ${(props) => props.theme.colors.teal};
  }
`
