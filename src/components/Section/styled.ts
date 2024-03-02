import styled from 'styled-components';

export const SectionContainer = styled('section')`
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 2rem;

  @media (max-width: 1324px) {
    grid-template-columns: 1fr;
  }

  div h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 57.6px;
    color: ${(props) => props.theme.black900};

    span {
      display: block;
    }
  }

  > div p {
    color: ${(props) => props.theme.gray800};
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
    max-width: 480px;
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 920px) {
    flex-wrap: wrap;
  }

  button {
    max-height: 3rem;
  }

  button:nth-child(2) {
    border: 2px solid ${(props) => props.theme.green900};
  }
`;

export const ImageContainer = styled('div')`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1324px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }

  img {
    width: 100%;
    max-width: 400px;
  }
`;
