import { ButtonProps } from '../../types/types';
import { StyledButton } from './styled';

export function Button({ color, children, onclick }: ButtonProps) {
  return (
    <StyledButton onClick={onclick} color={color}>
      {children}
    </StyledButton>
  );
}
