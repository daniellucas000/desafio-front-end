import styled from 'styled-components';

export const HeaderContainer = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.81rem 8.625rem;
  margin-bottom: 3rem;
  background: linear-gradient(
    rgb(245, 255, 251) 31.04%,
    rgb(255, 255, 255) 100%
  );

  @media (max-width: 920px) {
    padding: 1.81rem 2rem;
  }

  @media (max-width: 576px) {
    padding: 1.81rem 1rem;
  }

  svg:last-child {
    display: none;
    color: ${(props) => props.theme.green900};
    @media (max-width: 576px) {
      display: block;
    }
  }

  ul {
    display: flex;
    gap: 1rem;

    @media (max-width: 576px) {
      display: none;
    }
  }
`;
