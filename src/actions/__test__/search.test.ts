import { safeFetch } from '@/lib';
import { executeSearchByType } from '../search'; // Replace with the correct module path

jest.mock('@/lib', () => ({
  safeFetch: jest.fn(),
}));

const mockSearchResponse = {
  total_count: 2,
  incomplete_results: false,
  items: [
    {
      login: 'login',
      avatar_url: 'avatar_url',
    },
    {
      name: 'name',
      forks_count: 5,
      owner: {
        avatar_url: 'avatar_url',
      },
      stargazers_count: 10,
      html_url: 'html_url',
      language: 'language',
    },
  ],
};

describe('executeSearchByType', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call executeSearchByType with correct arguments', async () => {
    process.env.GITHUB_ACCESS_TOKEN = 'mocked-token';

    const query = 'test';
    const page = 1;
    const type = 'repositories';

    const expectedEndpoint = `https://api.github.com/search/${type}?q=${query}&per_page=10&page=${page}`;
    const expectedOptions = {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };

    (safeFetch as jest.Mock).mockResolvedValue(mockSearchResponse);

    const result = await executeSearchByType(query, page, type);

    expect(safeFetch).toHaveBeenCalledWith(expectedEndpoint, expectedOptions);
    expect(result).toEqual(mockSearchResponse);

    delete process.env.GITHUB_ACCESS_TOKEN;
  });
});
