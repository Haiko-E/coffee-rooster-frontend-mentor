import React from 'react';
import styles from './plan-item.module.css';
import { fraunces } from '@/pages/_app';
export default function PlanItem({ title, text, radioName, form, formValue }) {
  const titleLow = title.toLowerCase();

  function onChangeHandler(e) {
    if (e.target.value === 'capsule' && e.target.name === 'coffee') {
      form.setFieldValue('grind', 'none');
    } else if (e.target.value !== 'capsule' && e.target.name === 'coffee') {
      form.setFieldValue('grind', '____');
    }
    form.setFieldValue(radioName, titleLow);
  }

  return (
    <div>
      <input
        value={titleLow}
        type='radio'
        name={radioName}
        id={titleLow}
        className={styles.input}
        checked={formValue === titleLow}
        onChange={onChangeHandler}
      />
      <label htmlFor={titleLow} className={styles['plan-item']}>
        <h5 className={fraunces.className}>{title}</h5>
        <p>{text}</p>
      </label>
    </div>
  );
}
