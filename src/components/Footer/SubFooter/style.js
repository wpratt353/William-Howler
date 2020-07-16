import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export const SubFooterWrap = styled(Container)`
  padding: 8rem 0;

  h1 {
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 3rem;
  }

  :after {
    background-color: ${(props) => props.theme.colors.lightgrey};
    position: absolute;
    width: 100%;
    height: 1px;
    display: block;
    left: 4rem;
    content: '';
    margin-top: 8rem;
  }

  @media (max-width: 1278px) {
    padding-left: 4rem;
  }

  @media (max-width: 768px) {
    padding-left: 6rem;
    .row {
      .align-right {
        text-align: left;
      }
    }
  }
`
