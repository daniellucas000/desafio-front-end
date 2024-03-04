import { render, fireEvent } from '@testing-library/react';
import { Button } from '../../components/Button';

describe('Componente Button', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(<Button>Clique aqui</Button>);

    expect(getByText('Clique aqui')).toBeInTheDocument();
  });

  it('chama a função onClick quando o botão é clicado', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <Button onclick={onClickMock}>Clique aqui</Button>
    );
    const button = getByText('Clique aqui');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
