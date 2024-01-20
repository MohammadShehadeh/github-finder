import renderer from 'react-test-renderer';

import { Button } from '..';

describe('Button', () => {
  it('should render "default" to match snapshot', () => {
    const tree = renderer.create(<Button>Default Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render "small" to match snapshot', () => {
    const tree = renderer
      .create(
        <Button variant="contained" size="small">
          small Button
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
