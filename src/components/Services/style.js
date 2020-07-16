import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const ServicesWrap = styled.div`
  position: relative;
  padding: 10rem 0 10rem 0;
  background-color: ${(props) => props.theme.colors.green};

  @media (max-width: 991px) {
    padding: 5rem 0;

    .column-left {
      padding-bottom: 3rem;
    }
  }

  .container {
    @media (max-width: 1290px) {
      padding-left: 5rem;
    }
    @media (max-width: 991px) {
      padding-left: 4rem;
    }
    @media (max-width: 768px) {
      padding-left: 5.5rem;
    }
  }

  .slick-slider {
    cursor: url('cursor/1.svg'), auto;
  }

  p {
    color: ${(props) => props.theme.colors.white};
  }

  h1 {
    color: ${(props) => props.theme.colors.tan};
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
      margin-bottom: 1.25rem;
    }
  }

  h4 {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.25rem;
  }
`

export const SliderSection = styled.div`
  padding: 0 3rem;
  border-left: 1px solid #4d6b6a;

  :focus,
  :active {
    border-left: 1px solid #4d6b6a;
  }

  @media (max-width: 768px) {
    border-left: 0;
    padding: 0;
  }
`

export const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 14rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;

  @media (max-width: 768px) {
    height: 18rem;
  }
`
