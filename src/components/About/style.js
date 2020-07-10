import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import BackgroundImage from 'gatsby-background-image'

export const AboutWrap = styled(Container)`
  position: relative;
  padding: 10rem 0 10rem 0;
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
`

export const StyledBackground = styled(BackgroundImage)`
  width: 50vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`
