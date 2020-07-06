import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export const FooterWrap = styled(Container)`
  padding: 8rem 0 5rem 0;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.teal};
  font-size: ${(props) => props.theme.fontSize.small};

  .logo {
    color: ${(props) => props.theme.colors.teal};
  }
  .row {
    .align-right {
      font-size: ${(props) => props.theme.fontSize.xsmall};
      color: ${(props) => props.theme.colors.grey};
      text-align: right;
    }
    .align-right a {
      color: ${(props) => props.theme.colors.grey};
      font-size: ${(props) => props.theme.fontSize.xsmall};
      margin-bottom: ${(props) => props.theme.fontSize.xxsmall};

      :hover {
        color: ${(props) => props.theme.colors.teal};
      }
    }
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
