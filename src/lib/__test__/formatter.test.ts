import { formatUserData, formatRepoData } from '..'; // Replace with the correct module path

const mockUser = {
  login: 'testuser',
  avatar_url: 'https://example.com/avatar.jpg',
  html_url: 'https://github.com/testuser',
};

const mockRepo = {
  name: 'testrepo',
  html_url: 'https://github.com/testuser/testrepo',
  owner: {
    ...mockUser,
  },
  stargazers_count: 10,
  forks_count: 5,
  language: 'JavaScript',
};

describe('formatUserData', () => {
  it('should format user data correctly', () => {
    const formattedUser = formatUserData(mockUser);

    expect(formattedUser.name).toBe(mockUser.login);
    expect(formattedUser.image).toBe(mockUser.avatar_url);
    expect(formattedUser.url).toBe(mockUser.html_url);
    expect(formattedUser.type).toBe('users');
  });

  it('should safety check and return user data correctly', () => {
    const formattedUser = formatUserData({ ...mockUser, avatar_url: undefined });

    expect(formattedUser.name).toBe(mockUser.login);
    expect(formattedUser.image).toBe('');
    expect(formattedUser.url).toBe(mockUser.html_url);
    expect(formattedUser.type).toBe('users');
  });
});

describe('formatRepoData', () => {
  it('should format repo data correctly', () => {
    const formattedRepo = formatRepoData(mockRepo);

    expect(formattedRepo.name).toBe(mockRepo.name);
    expect(formattedRepo.url).toBe(mockRepo.html_url);
    expect(formattedRepo.image).toBe(mockRepo.owner?.avatar_url);
    expect(formattedRepo.starsCount).toBe(mockRepo.stargazers_count);
    expect(formattedRepo.forksCount).toBe(mockRepo.forks_count);
    expect(formattedRepo.language).toBe(mockRepo.language);
    expect(formattedRepo.type).toBe('repositories');
  });

  it('should safety check and return repo data correctly', () => {
    const formattedRepo = formatRepoData({
      ...mockRepo,
      owner: { ...mockUser, avatar_url: undefined },
    });

    expect(formattedRepo.name).toBe(mockRepo.name);
    expect(formattedRepo.url).toBe(mockRepo.html_url);
    expect(formattedRepo.image).toBe('');
    expect(formattedRepo.starsCount).toBe(mockRepo.stargazers_count);
    expect(formattedRepo.forksCount).toBe(mockRepo.forks_count);
    expect(formattedRepo.language).toBe(mockRepo.language);
    expect(formattedRepo.type).toBe('repositories');
  });
});
