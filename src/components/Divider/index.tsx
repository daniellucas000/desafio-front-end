import { DividerProps } from '../../types/types';
import { DividerContainer } from './styled';

export function Divider({ color, $margin, height, width }: DividerProps) {
  return (
    <DividerContainer
      color={color}
      $margin={$margin}
      height={height}
      width={width}
      data-testid="divider"
    />
  );
}
