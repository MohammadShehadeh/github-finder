import renderer from 'react-test-renderer';

import { Input } from '..';

describe('Input', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
