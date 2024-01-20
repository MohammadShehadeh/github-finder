import renderer from 'react-test-renderer';

import { Eyebrow } from '..';

describe('Eyebrow', () => {
  it('should render "contained" to match snapshot', () => {
    const tree = renderer.create(<Eyebrow label="Contained Eyebrow" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render "outlined" to match snapshot', () => {
    const tree = renderer
      .create(<Eyebrow variant="outlined" label="Contained Eyebrow" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
