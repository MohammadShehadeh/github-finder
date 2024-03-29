'use client';

import React from 'react';

import { Button } from '@/components/shared/Button';

import styles from './Filters.module.scss';
import { Filter } from '@/constants';

interface FiltersProps {
  filters: Filter[];
  selected: string;
  onSelect: (value: string) => void;
}

const Filters = ({ filters, onSelect, selected }: FiltersProps) => (
  <div className={styles.filters}>
    <p>Search type:</p>
    {filters?.map(({ label, id }) => (
      <Button
        onClick={() => onSelect(id)}
        size="small"
        variant={id === selected ? 'contained' : 'outlined'}
        key={id}
      >
        {label}
      </Button>
    ))}
  </div>
);

export const MemoizedFilters = React.memo(Filters);
