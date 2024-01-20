import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Hero } from '..';

describe('Hero', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Hero label correctly', () => {
    render(<Hero />);
    const heroLabel = screen.getByText(/Unleash/i);
    expect(heroLabel).toBeInTheDocument();
  });
});
