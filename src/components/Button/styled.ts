import styled from 'styled-components';

export const StyledButton = styled('button')`
  background: ${(p) => p.color || 'white'};
  color: ${(p) => (p.color ? 'white' : '#018762')};

  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0.02rem;
  padding: 0.625rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.625rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  border-radius: 8px;

  &:hover,
  &:active,
  &:focus {
    background: ${(p) => (p.color ? 'rgb(0, 119, 86);' : 'rgb(230, 243, 239)')};
    border: none;
  }
`;
