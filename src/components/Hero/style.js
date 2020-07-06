import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
    width: 50vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;

    .
`
export const HeroWrap = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.teal};
    z-index: 2;
`
export const StyledArrows = styled.div`
    background-color: ${props => props.theme.colors.white};
    width: 53vw;
    height: 10vh;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 3;
`