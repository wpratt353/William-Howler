import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const ServicesWrap = styled.div`
  position: relative;
  padding: 10rem 0 10rem 0;
  background-color: ${(props) => props.theme.colors.green};

  .container {
    padding-left: 0;

    @media (max-width: 1278px) {
      padding-left: 4rem;
    }

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }

  .sliderSection {
    padding: 0 3rem;
    border-left: 1px solid #4d6b6a;

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

  p {
    color: ${(props) => props.theme.colors.white};
  }

  h1 {
    color: ${(props) => props.theme.colors.tan};
    margin-bottom: 3rem;
  }

  h4 {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.25rem;
  }
  .slick-track .slick-slide:nth-of-type(2) .services-image {
    margin-top: 1.49rem;
  }
  .slick-track .slick-slide:nth-of-type(4) .services-image {
    margin-top: 2.9rem;
  }
`
export const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 14rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`
