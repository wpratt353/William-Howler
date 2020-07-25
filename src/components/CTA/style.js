import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem;
  line-height: 1;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-transform: lowercase;
  top: 0;
  z-index: 10;

  border: ${(props) => (props.border ? '1px solid ' + props.border : 'none')};
  background: ${(props) => (props.background ? props.background : 'none')};
  color: ${(props) => (props.background ? '#364653' : '#afa88c')};
  position: ${(props) => (props.background ? 'absolute' : 'relative')};
  margin: ${(props) => (props.background ? '3rem' : '3rem auto 3rem 0')};
  margin-right: ${(props) => (props.background ? '0' : 'auto')};

  @media (max-width: 991px) {
    margin: 3rem auto 0 0;
    display: ${(props) => props.mobile};
  }

  span {
    padding-left: 15px;
    transition: all 0.4s;
  }

  :hover {
    padding-right: 1.5rem;
    color: ${(props) => (props.background ? '#364653' : '#afa88c')};

    span {
      transform: translate(0.5rem, 0);
    }
  }
`
