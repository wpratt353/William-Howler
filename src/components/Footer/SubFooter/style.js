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

  :after {
    background-color: ${(props) => props.theme.colors.lightgrey};
    position: absolute;
    width: 100%;
    height: 2px;
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
