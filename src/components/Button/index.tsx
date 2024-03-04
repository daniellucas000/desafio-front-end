import { ButtonProps } from '../../types/types';
import { StyledButton } from './styled';

export function Button({ color, children, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
}
