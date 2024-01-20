import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Form } from '..';

const mockOnSubmit = jest.fn();
const mockOnReset = jest.fn();

HTMLFormElement.prototype.requestSubmit = jest.fn().mockImplementation(() => Promise.resolve());

describe('Form', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Form onSubmit={mockOnSubmit} onReset={mockOnReset} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle form buttons correctly', () => {
    render(<Form onSubmit={mockOnSubmit} onReset={mockOnReset} />);

    const reset = screen.getByTestId('reset');

    fireEvent.click(reset);
    expect(mockOnReset).toHaveBeenCalled();
  });
});
