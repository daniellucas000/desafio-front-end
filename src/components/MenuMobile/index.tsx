import { useEffect, useRef } from 'react';
import { MenuMobileProps } from '../../types/types';
import { Container } from './styled';

import { IoClose } from 'react-icons/io5';
import { Button } from '../Button';

export function MenuMobile({ isMenuOpen, setIsMenuOpen }: MenuMobileProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <Container ref={menuRef} $isVisible={isMenuOpen}>
      <IoClose size={45} onClick={() => setIsMenuOpen(false)} />
      <ul>
        <li>
          <a href="#">Quem somos</a>
        </li>
        <li>
          <a href="#">Ajuda</a>
        </li>
        <li>
          <Button color="#018762">Entrar</Button>
        </li>
      </ul>
    </Container>
  );
}
