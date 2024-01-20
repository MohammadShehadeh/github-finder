import renderer from 'react-test-renderer';

import { Message } from '..';

const mockMessageProps = {
  title: 'title',
  description: 'description',
};

describe('Message', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Message {...mockMessageProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
