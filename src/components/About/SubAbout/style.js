import styled from 'styled-components'

export const SubAboutWrap = styled.div`
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

  h1 {
    font-size: ${(props) => props.theme.fontSize.xlarge};
  }

  h4 {
    font-size: 1.25rem;
  }
`
