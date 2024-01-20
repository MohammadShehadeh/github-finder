'use client';

import React, { FormEvent } from 'react';
import { Input } from '@/components/shared/Input';
import { ResetIcon, SearchIcon, SendIcon } from '@/components/shared/Icons';
import { Button } from '@/components/shared/Button';

import styles from './Form.module.scss';

interface FormProps {
  onSubmit: (event: FormEvent) => void;
  onReset?: () => void;
}

export const Form = ({ onSubmit, onReset }: FormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
      <SearchIcon className={styles.searchIcon} />
      <Input
        className={styles.input}
        required
        placeholder="EX: MohammadShehadeh"
        name="query"
      />
      {onReset && (
        <Button
          className={styles.reset}
          size="small"
          variant="normal"
          type="reset"
          aria-label="Reset"
        >
          <ResetIcon />
        </Button>
      )}
      <Button className={styles.submit} type="submit" aria-label="Search">
        <SendIcon />
      </Button>
    </form>
  );
};
