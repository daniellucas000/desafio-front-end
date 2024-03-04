import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from '../../components/Section';

describe('Section', () => {
  test('verifica se o título é exibido corretamente', () => {
    render(<Section />);
    const titleElement = screen.getByRole('heading', {
      name: /Junte-se à nossa comunidade/i,
    });
    expect(titleElement).toBeInTheDocument();
  });

  test('verifica se o divider é exibido', () => {
    render(<Section />);
    const dividerElement = screen.getByTestId('divider');
    expect(dividerElement).toBeInTheDocument();
  });

  test('verifica se os botões são exibidos', () => {
    render(<Section />);
    const buscarAtendimentoButton = screen.getByText(/Buscar atendimento/i);
    const oferecerAtendimentoButton = screen.getByText(/Oferecer atendimento/i);
    expect(buscarAtendimentoButton).toBeInTheDocument();
    expect(oferecerAtendimentoButton).toBeInTheDocument();
  });

  test('verifica se a imagem é exibida', () => {
    render(<Section />);
    const imageElement = screen.getByAltText(
      /Uma médica segurando um tablet e conversando com uma paciente/i
    );
    expect(imageElement).toBeInTheDocument();
  });
});
