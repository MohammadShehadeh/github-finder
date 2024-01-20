import renderer from 'react-test-renderer';

import { Skeleton } from '..';

describe('Skeleton', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Skeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
