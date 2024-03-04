import { render } from '@testing-library/react';
import { Divider } from '../../components/Divider';

describe('Componente Divider', () => {
  it('renderiza corretamente com as props padrão', () => {
    const { container } = render(<Divider />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renderiza corretamente com props personalizadas', () => {
    const props = {
      color: 'red',
      $margin: '10px',
      height: '2px',
      width: '50%',
    };

    const { container } = render(<Divider {...props} />);
    const divider = container.firstChild;

    expect(divider).toHaveStyle(`
      background-color: ${props.color};
      margin: ${props.$margin};
      height: ${props.height};
      width: ${props.width};
    `);
  });
});
