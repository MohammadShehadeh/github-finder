'use server';

import { FetchDataResponse, safeFetch } from '@/lib';

export type GitHubUser = {
  login?: string;
  avatar_url?: string;
  html_url: string;
};

export type GitHubRepo = {
  name?: string;
  forks_count?: number;
  owner?: GitHubUser;
  stargazers_count?: number;
  html_url: string;
  language?: string;
};

export type GitHubSearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: (GitHubRepo | GitHubUser)[];
};

const GITHUB_SEARCH_ENDPOINT = 'https://api.github.com/search';
const PER_PAGE = 10;

export const executeSearchByType = async (query: string, page: number, type: string) => {
  const endpoint = `${GITHUB_SEARCH_ENDPOINT}/${type}?q=${query}&per_page=${PER_PAGE}&page=${page}`;
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  };

  const results = await safeFetch<FetchDataResponse<GitHubSearchResponse>>(endpoint, options);

  return results;
};
