import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
  width: 50vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`
export const HeroWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.teal};
  z-index: 2;
  padding-left: 4rem;

  .hero-left {
    display: flex;
    flex-direction: column;
    padding: 0 5rem 0 4rem;
    justify-content: center;

    div {
      margin: 0 auto;
    }
    h1 {
      color: ${(props) => props.theme.colors.white};
      font-size: 4.5rem;
      line-height: 1.25;
      display: flex;
      flex-direction: column;
    }

    button {
      color: ${(props) => props.theme.colors.tan};
      border: 1px solid ${(props) => props.theme.colors.tan};
      display: inline-flex;
      align-items: center;
      margin-right: auto;
      padding: 0.75rem;
      line-height: 1;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      text-transform: lowercase;
      transition: all 0.4s;
      margin-top: 3rem;

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
export const StyledArrows = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 5rem;
  bottom: 6px;
  left: 15px;
  position: absolute;
  z-index: 3;

  button {
    position: absolute;
    font-size: 32px;
    border: 1px solid ${(props) => props.theme.colors.teal};
    background: #313f4a;
    color: ${(props) => props.theme.colors.tan};
    width: 5rem;
    height: 100%;

    :first-of-type {
      transform: translate(-100%, 0);
    }
  }
`
