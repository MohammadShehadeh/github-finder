'use client';

import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from '@/hooks';
import { FormattedRepo, FormattedUser, formatRepoData, formatUserData } from '@/lib';
import { FILTERS, REPOSITORIES, SearchType, USERS } from '@/constants';
import { executeSearchByType } from '@/actions/search';

import { Message } from '@/components/shared/Message';
import { Container } from '@/components/shared/Container';
import { Grid } from '@/components/shared/Grid';
import { Card } from '@/components/shared/Card';

import { Filters, Form } from '.';

import styles from './Search.module.scss';
import { Skeleton } from '../shared/Skeleton';

type SearchResultsType = {
  query: string;
  page: number;
  items: (FormattedRepo | FormattedUser)[] | null;
  isError: boolean;
  isLoading: boolean;
  type: SearchType;
  hasMoreData: boolean;
};

const LOADING_PLACEHOLDER = 4;

const initialSearchResults: SearchResultsType = {
  query: '',
  page: 0,
  items: null,
  isError: false,
  isLoading: false,
  type: FILTERS[0].id,
  hasMoreData: true,
};

const formatters = {
  [USERS]: formatUserData,
  [REPOSITORIES]: formatRepoData,
};

export const Search = () => {
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const observerTargetRef = useRef(null);

  const { query, page, items, type, isError, isLoading } = searchResults;

  const observerCallback = useCallback(() => {
    setSearchResults((prevSearchResults) => {
      // prevent unnecessary updating on the state
      if (
        !prevSearchResults.query ||
        !prevSearchResults.items?.length ||
        !prevSearchResults.hasMoreData
      ) {
        return prevSearchResults;
      }

      return {
        ...prevSearchResults,
        page: prevSearchResults.page + 1,
      };
    });
  }, []);

  const resetHandler = useCallback(() => {
    setSearchResults((prevSearchResults) => ({
      ...initialSearchResults,
      type: prevSearchResults.type,
    }));
  }, []);

  const submitHandler = useCallback((event: FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const formQuery = formData.get('query') as string;
    const query = (formQuery ?? '').trim();

    setSearchResults((prevSearchResults) => ({
      ...prevSearchResults,
      items: null,
      page: 1,
      query,
    }));
  }, []);

  const searchByTypeHandler = useCallback((type: SearchType) => {
    setSearchResults((prevSearchResults) => ({
      ...prevSearchResults,
      items: null,
      page: 1,
      type,
    }));
  }, []);

  useIntersectionObserver(observerTargetRef, observerCallback);

  useEffect(() => {
    if (!page || !query) return;

    const fetchData = async () => {
      setSearchResults((prevSearchResults) => ({
        ...prevSearchResults,
        isLoading: true,
      }));

      const userSearchData = await executeSearchByType(query, page, type);

      if ('error' in userSearchData) {
        setSearchResults((prevSearchResults) => ({
          ...prevSearchResults,
          items: null,
          page: 0,
          isError: true,
          isLoading: false,
          hasMoreData: false,
        }));

        return;
      }

      if ('items' in userSearchData) {
        setSearchResults((prevSearchResults) => {
          return {
            ...prevSearchResults,
            isLoading: false,
            items: [
              ...(prevSearchResults.items ?? []),
              ...(userSearchData.items?.map((item) => formatters[type](item)) ?? []),
            ],
            hasMoreData: !!userSearchData.items.length,
          };
        });

        return;
      }

      // Fallback: In the event of unexpected API behavior
      // disabling further loading, while preserving existing data
      setSearchResults((prevSearchResults) => {
        return {
          ...prevSearchResults,
          hasMoreData: false,
          isError: true,
          isLoading: false,
        };
      });
    };

    fetchData();
  }, [query, page, type]);

  return (
    <section className={styles.search}>
      <Container>
        <h2 className={styles.center}>Search for developers or repositories</h2>
        <Form onSubmit={submitHandler} onReset={resetHandler} />
        <Filters filters={FILTERS} selected={type} onSelect={searchByTypeHandler} />

        <Grid>
          {items?.map((item, index) => {
            return (
              // GitHub sometimes returns duplicated data
              // Combining name and index to prevent duplication issues
              <Grid.Col key={`${item.name}-${index}`} lg={3} md={6} sm={12}>
                <Card {...item} />
              </Grid.Col>
            );
          })}

          {isLoading &&
            Array.from({ length: LOADING_PLACEHOLDER }, (_, index) => (
              <Grid.Col key={index} lg={3} md={6} sm={12}>
                <Skeleton />
              </Grid.Col>
            ))}
        </Grid>

        {items?.length === 0 && (
          <Message
            title="No results found!"
            description="We can't find any results based on your search."
          />
        )}

        {isError && (
          <Message title="Something went wrong!" description="please try again later." />
        )}

        <div className={styles.observerTarget} ref={observerTargetRef} />
      </Container>
    </section>
  );
};
