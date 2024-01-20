import renderer from 'react-test-renderer';

import { Card } from '..';

const mockCardProps = {
  url: 'url',
  language: 'js',
  forksCount: 10,
  starsCount: 10,
};

describe('Card', () => {
  it('should render to match snapshot', () => {
    const tree = renderer.create(<Card {...mockCardProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render to match snapshot with missing data', () => {
    const tree = renderer
      .create(<Card {...mockCardProps} language="" forksCount={0} starsCount={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
