import styled, { css } from 'styled-components';

interface VisibleProps {
  readonly $isVisible: boolean;
}

export const Container = styled('div')<VisibleProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  color: ${(props) => props.theme.white};

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transform: scale(0.7);
    transition: 0.7s;

    a,
    button {
      color: ${(props) => props.theme.white};
      font-size: 2rem;
      line-height: 1.6;
    }
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;
