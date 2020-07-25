import styled from 'styled-components'

export const SubAboutWrap = styled.div`
  position: relative;
  padding: 10rem 0 10rem 0;
  color: ${(props) => props.theme.colors.teal};

  @media (max-width: 1025px) {
    padding-bottom: 5rem;
  }

  .container {
    padding-left: 5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.xlarge};

    @media (max-width: 991px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 1.25rem;

    @media (max-width: 991px) {
      margin-bottom: 3rem;
    }
  }
`
