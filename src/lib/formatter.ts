import type { GitHubRepo, GitHubUser } from '@/actions/search';
import { REPOSITORIES, USERS } from '@/constants';

export interface FormattedUser {
  name?: string;
  image: string;
  url: string;
  repositories?: string;
  type: string;
}

export interface FormattedRepo {
  name?: string;
  description?: string;
  url: string;
  image: string;
  starsCount?: number;
  forksCount?: number;
  language?: string;
  type: string;
}

export const formatUserData = (user: GitHubUser): FormattedUser => ({
  name: user.login,
  image: user.avatar_url || '',
  url: user.html_url,
  type: USERS,
});

export const formatRepoData = (repo: GitHubRepo): FormattedRepo => ({
  name: repo.name,
  url: repo.html_url,
  image: repo.owner?.avatar_url || '',
  starsCount: repo.stargazers_count,
  forksCount: repo.forks_count,
  language: repo.language,
  type: REPOSITORIES,
});
