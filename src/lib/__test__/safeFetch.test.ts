import { safeFetch } from '..';

describe('safeFetch', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should resolve with data on successful fetch', async () => {
    const responseData = { key: 'value' };
    const response = new Response(JSON.stringify(responseData));
    jest.spyOn(global, 'fetch').mockResolvedValue(response);

    const result = await safeFetch('/api/data');

    expect(result).toEqual(responseData);
  });

  it('should reject with an error message on failed fetch', async () => {
    const errorMessage = 'Failed to fetch data';
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));

    const result = await safeFetch('/api/data');

    expect(result).toEqual({ message: new Error(errorMessage), error: true });
  });
});
