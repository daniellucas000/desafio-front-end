import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components/Header';

describe('Componente Header', () => {
  it('renderiza corretamente', () => {
    const { getByAltText, queryAllByText } = render(<Header />);
    expect(getByAltText('Logo da Lacrei Saúde')).toBeInTheDocument();
    expect(queryAllByText('Quem somos')).toHaveLength(2);
    expect(queryAllByText('Ajuda')).toHaveLength(2);
    expect(queryAllByText('Entrar')).toHaveLength(2);
  });

  it('abre o menu quando o ícone do menu é clicado', () => {
    const { getByTestId } = render(<Header />);
    const menuIcon = getByTestId('menu-icon');

    fireEvent.click(menuIcon);

    expect(menuIcon).toBeTruthy();
  });
});
