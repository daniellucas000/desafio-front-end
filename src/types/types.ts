import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: () => void | undefined;
  color?: string;
  children?: ReactNode;
}

export interface DividerProps {
  color?: string;
  width?: string;
  height?: string;
  $margin?: string;
  role?: string;
}

export interface MenuMobileProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
