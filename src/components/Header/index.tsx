import { useState } from 'react';
import { Button } from '../Button';
import { HeaderContainer } from './styled';
import { MenuMobile } from '../MenuMobile';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer data-testid="header">
      <a href="/">
        <img src="/logolacreisaude.svg" alt="Logo da Lacrei Saúde" />
      </a>

      <MenuMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <nav>
        <ul>
          <li>
            <Button>Quem somos</Button>
          </li>
          <li>
            <Button>Ajuda</Button>
          </li>
          <li>
            <Button color="#018762">Entrar</Button>
          </li>
        </ul>
      </nav>
      <HiOutlineMenuAlt3
        data-testid="menu-icon"
        onClick={() => setIsMenuOpen(true)}
        size={35}
      />
    </HeaderContainer>
  );
}
