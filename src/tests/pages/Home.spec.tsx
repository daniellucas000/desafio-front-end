import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../../pages/Home';

describe('Home', () => {
  test('verifica se o Header, Section e Footer são exibidos', () => {
    render(<Home />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const sectionElement = screen.getByTestId('section');
    expect(sectionElement).toBeInTheDocument();

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
