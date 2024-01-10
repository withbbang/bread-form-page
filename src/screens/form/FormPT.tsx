/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './Form.module.scss';

function FormPT({ onClick }: FormPTProps): React.JSX.Element {
  return (
    <div className={styles.wrap}>
      <h1 onClick={onClick}>Form Page</h1>
    </div>
  );
}

interface FormPTProps {
  onClick: () => void;
}

export default FormPT;
