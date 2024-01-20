import renderer from 'react-test-renderer';

import { Container } from '..';

describe('Container', () => {
  it('should render "main" to match snapshot', () => {
    const tree = renderer.create(<Container>main</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render "full" to match snapshot', () => {
    const tree = renderer.create(<Container size="full">full</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
