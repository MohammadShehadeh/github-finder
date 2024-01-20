import renderer from 'react-test-renderer';

import { Grid } from '..';

describe('Grid', () => {
  it('should render to match snapshot', () => {
    const tree = renderer
      .create(
        <Grid>
          <Grid.Col lg={4} md={6} sm={12}>
            Col 1
          </Grid.Col>
          <Grid.Col lg={4} md={6} sm={12}>
            Col 2
          </Grid.Col>
          <Grid.Col lg={4} md={6} sm={12}>
            Col 3
          </Grid.Col>
        </Grid>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
