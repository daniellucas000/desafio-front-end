import { render, fireEvent } from '@testing-library/react';
import { Footer } from '../../components/Footer';

describe('Componente Footer', () => {
  it('renderiza corretamente', () => {
    const { getByText, getByAltText } = render(<Footer />);

    expect(getByText('Lacrei Saúde')).toBeInTheDocument();
    expect(getByText('Quem Somos')).toBeInTheDocument();
    expect(getByAltText('Logo da Lacrei Saúde')).toBeInTheDocument();
  });

  it('rolar para o topo quando o botão é clicado', () => {
    const scrollToMock = jest.fn();
    global.scrollTo = scrollToMock;

    const { getByAltText } = render(<Footer />);
    const button = getByAltText('Ícone seta apontada para cima');

    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
