import styled from 'styled-components';

export const FooterContainer = styled('footer')`
  margin: 4rem 0;
`;

export const ContactContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1324px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  > ul:not(:first-child):nth-child(n) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      color: ${(props) => props.theme.black900};
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 27px;
    }
    li a {
      color: ${(props) => props.theme.gray800};
      font-size: 1rem;
      line-height: 24px;
      font-weight: 400;
    }
  }
`;

export const SocialContainer = styled('ul')`
  display: flex;
  gap: 1rem;
`;

export const InfosContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 576px) {
    grid-template-columns: 3fr 1fr;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      color: ${(props) => props.theme.gray700};
      font-size: 0.875rem;
      line-height: 21px;
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    justify-self: end;

    button {
      border: 2px solid ${(props) => props.theme.green900};
      box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;
      padding: 0.625rem;
    }
  }
`;
