import styled from 'styled-components';
import { DividerProps } from '../../types/types';

export const DividerContainer = styled.div<DividerProps>`
  background: ${({ color }) => color || 'rgb(176, 224, 211)'};
  margin: ${({ $margin }) => $margin || '3rem 0'};
  height: ${({ height }) => height || '1px'};
  width: ${({ width }) => width || 'auto'};
`;
