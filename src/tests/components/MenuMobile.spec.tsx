import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MenuMobile } from '../../components/MenuMobile';

describe('MenuMobile', () => {
  test('verifica se o menu é exibido quando isMenuOpen é true', () => {
    render(<MenuMobile isMenuOpen={true} setIsMenuOpen={() => {}} />);
    const menuElement = screen.getByRole('menu');
    expect(menuElement).toBeInTheDocument();
  });

  test('verifica se o menu não é exibido quando isMenuOpen é false', () => {
    render(<MenuMobile isMenuOpen={false} setIsMenuOpen={() => {}} />);
    const menuElement = screen.queryByRole('menu');
    expect(menuElement).not.toBeInTheDocument();
  });

  test('verifica se o menu fecha ao clicar no ícone de fechar', () => {
    const setIsMenuOpen = jest.fn();
    render(<MenuMobile isMenuOpen={true} setIsMenuOpen={setIsMenuOpen} />);
    const closeIcon = screen.getByRole('button', { name: /fechar menu/i });
    fireEvent.click(closeIcon);
    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });

  test('verifica se o menu fecha ao clicar fora dele', () => {
    const setIsMenuOpen = jest.fn();
    render(<MenuMobile isMenuOpen={true} setIsMenuOpen={setIsMenuOpen} />);
    fireEvent.mouseDown(document.body);
    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });
});
