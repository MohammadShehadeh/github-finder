import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';

import { executeSearchByType } from '@/actions/search';
import { Search } from '..';

jest.mock('@/actions/search', () => ({
  executeSearchByType: jest.fn(),
}));

jest.mock('@/hooks', () => ({
  useIntersectionObserver: jest.fn(),
}));

describe('Search', () => {
  const submitForm = async () => {
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('input');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } });
      fireEvent.submit(form);

      jest.advanceTimersByTime(2000);
    });
  };

  it('should render to match snapshot', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('should handle show users correctly', async () => {
    render(<Search />);

    (executeSearchByType as jest.Mock).mockResolvedValue({
      items: [
        {
          login: 'testuser',
          html_url: 'https://github.com/testuser',
          avatar_url: 'https://github.com',
        },
      ],
    });

    await submitForm();

    expect(executeSearchByType).toHaveBeenCalledWith('test', 1, 'users');
    expect(screen.getByText(/testuser/i)).toBeInTheDocument();
  });

  it('should show error message correctly', async () => {
    render(<Search />);
    (executeSearchByType as jest.Mock).mockResolvedValue({
      error: true,
      message: 'something went wrong!',
    });

    await submitForm();

    expect(executeSearchByType).toHaveBeenCalledWith('test', 1, 'users');
    expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
  });

  it('should show 404 message correctly', async () => {
    render(<Search />);

    (executeSearchByType as jest.Mock).mockResolvedValue({
      items: [],
    });

    await submitForm();

    expect(executeSearchByType).toHaveBeenCalledWith('test', 1, 'users');
    expect(screen.getByText(/No results found!/i)).toBeInTheDocument();
  });

  it('should show error message correctly if api did not behave as expected', async () => {
    render(<Search />);

    (executeSearchByType as jest.Mock).mockResolvedValue({});

    await submitForm();

    expect(executeSearchByType).toHaveBeenCalledWith('test', 1, 'users');
    expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
  });

  it('should handle form reset correctly', () => {
    render(<Search />);
    const reset = screen.getByTestId('reset');
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(reset);

    expect(input).toHaveValue('');
  });
});
