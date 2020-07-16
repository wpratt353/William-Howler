import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import BackgroundImage from 'gatsby-background-image'

export const AboutWrap = styled(Container)`
  padding-bottom: 10rem;
  position: relative;
  color: ${(props) => props.theme.colors.teal};

  @media (max-width: 1025px) {
    padding-bottom: 5rem;
  }

  .container {
    padding-left: 0;

    @media (max-width: 1278px) {
      padding: 0 0 0 2rem;
    }

    @media (max-width: 1025px) {
      padding-left: 3rem;
    }
    @media (max-width: 768px) {
      padding-left: 4rem;
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
      right: 1.25rem;
      display: block;
      padding: 0.25rem 0.563rem;
      transition: all 0.8s ease;

      @media (max-width: 1280px) {
        right: 3rem;
      }
      @media (max-width: 991px) {
        right: 1.25rem;
      }
    }
  }
`

export const SmallCol = styled.div`
  width: 100%;

  @media (min-width: 1280px) {
    padding: 0 5rem;
  }

  h4 span {
    right: 6.25rem;
    @media (max-width: 1280px) {
      right: 3rem;
    }

    @media (max-width: 991px) {
      right: 1.25rem;
    }
  }
`

export const StyledCol = styled(Col)`
  padding-bottom: 8rem;
  height: 100%;
  width: 100%;
  padding: 1.25rem;

  @media (max-width: 1280px) {
    padding: 3rem;
  }
  @media (max-width: 991px) {
    padding: 1.25rem;
  }

  :hover h4 span,
  :active h4 span {
    background-color: ${(props) => props.theme.colors.tan};
    color: ${(props) => props.theme.colors.teal};
  }
`
export const StyledBackground = styled(BackgroundImage)`
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
`

export const SmallImage = styled(StyledBackground)`
  height: 12.5vw;

  @media (min-width: 1360px) {
    min-height: 241px;
  }
  @media (max-width: 1360px) {
    height: 21vw;
    min-height: 232px;
  }
`

export const TallImage = styled(StyledBackground)`
  height: 27.5vw;

  @media (min-width: 1360px) {
    min-height: 520px;
  }
  @media (max-width: 1360px) {
    height: 40vw;
    min-height: 347px;
  }
`

export const MidImage = styled(StyledBackground)`
  height: 14vw;

  @media (min-width: 1360px) {
    min-height: 269px;
  }
  @media (max-width: 1360px) {
    min-height: 179px;
  }
`

export const BlockQuote = styled(StyledCol)`
  padding: 10rem 2rem 8rem 8rem;

  @media (max-width: 1280px) {
    padding: 3rem;
  }

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
`
