import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

  h4 {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.25rem;
  }

  .slick-track,
  .slick-list {
    display: flex;
  }

  .slick-slide,
  .slick-slide div:first-child {
    display: flex !important;
    flex-wrap: wrap;
  }
`

export const StyledSlider = styled(Slider)`
  cursor: url('./cursor/1.png'), auto;
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

  h1 {
    color: ${(props) => props.theme.colors.tan};
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
      margin-bottom: 1.25rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors.white};
  }

  a {
    display: flex;
  }
`

export const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 14rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  display: flex;
  align-self: flex-end;

  @media (max-width: 768px) {
    height: 18rem;
  }
`
