import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Header } from '..';

describe('Header', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Header correctly', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Github Finder/i);
    expect(headerElement).toBeInTheDocument();
  });
});
