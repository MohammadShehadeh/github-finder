import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Filters } from '..';

const mockFilterProps = {
  filters: [
    {
      id: 'users',
      label: 'Users',
    },
    {
      id: 'repositories',
      label: 'Repositories',
    },
  ],
  onSelect: jest.fn(),
  selected: 'users',
};

describe('Filters', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Filters {...mockFilterProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle filters click correctly', () => {
    render(<Filters {...mockFilterProps} />);

    const button = screen.getAllByRole('button')[1];
    fireEvent.click(button);
    expect(mockFilterProps.onSelect).toHaveBeenCalled();
  });
});
