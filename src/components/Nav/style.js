import styled from 'styled-components'

export const NavWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4rem;
  height: 100vh;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.1);
`

export const NavFlex = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  width: 100%;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  .nav-back-to-top {
    .backToTop {
      opacity: 1;
      transition: opacity 0.4s;
      cursor: pointer;
      z-index: 999;
      bottom: 0;
    }
    div {
      opacity: 0;
      position: absolute;
      bottom: -400px;
      transition: opacity 0.4s;
    }
  }
`

export const StyledNav = styled.nav`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  padding-bottom: 1.25rem;
  text-align: center;
  align-items: center;

  .backToTop {
    opacity: 0;
    -webkit-transform: rotate(270deg) translate(0, 0%);
    transform: rotate(270deg) translate(0, 0%);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    opacity: 0;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    color: ${(props) => props.theme.colors.tan};
    white-space: nowrap;
    padding-top: 2.5rem;
    position: absolute;
    bottom: -200px;

    span {
      padding-left: 1rem;
      font-size: 1rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div a {
    display: flex;
    color: ${(props) => props.theme.colors.tan};
    font-weight: 600;
  }
`

export const MenuButton = styled.a`
  display: flex;
  height: 1.125rem;
  width: 1.25rem;
  flex-direction: column;
  justify-content: space-between;

  :hover span {
    width: 75%;
  }
  :hover span:nth-child(2) {
    width: 100%;
  }

  span {
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.colors.tan};
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    height: 2px;
  }
  span:nth-child(2) {
    width: 75%;
  }
`
