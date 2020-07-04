import styled from 'styled-components'

export const LogoWrap = styled.div`
    color: white;

    .logo {
        div:last-of-type {
            display: none;
        }
    }
    .logo-small {
        div:first-of-type {
            display: none;
        }
        div:last-of-type {
            display: block;
        }
    }
`