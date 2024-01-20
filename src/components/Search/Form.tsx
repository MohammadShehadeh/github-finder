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

const Form = ({ onSubmit, onReset }: FormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit} onReset={onReset} data-testid="form">
      <SearchIcon className={styles.searchIcon} />
      <Input
        data-testid="input"
        className={styles.input}
        required
        placeholder="e.g. Github"
        name="query"
      />
      {onReset && (
        <Button
          className={styles.reset}
          size="small"
          variant="normal"
          type="reset"
          data-testid="reset"
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

export const MemoizedForm = React.memo(Form);
