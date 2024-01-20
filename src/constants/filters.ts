export type SearchType = 'users' | 'repositories';

export type Filter = {
  label: string;
  id: string;
};

export const USERS = 'users';
export const REPOSITORIES = 'repositories';

export const FILTERS: Filter[] = [
  {
    label: 'Users',
    id: USERS,
  },
  {
    label: 'Repositories',
    id: REPOSITORIES,
  },
];
