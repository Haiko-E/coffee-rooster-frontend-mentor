import React from 'react';
import styles from './summary.module.css';

export default function Summary({
  title,
  coffee,
  bean,
  grams,
  deliver,
  grind,
  className,
}) {
  return (
    <div className={`${styles.summary} ${className}`}>
      {title && <p>{title}</p>}
      <blockquote>
        “ I drink coffee my {coffee === 'capsule' ? 'using' : 'as'}{' '}
        <span>{coffee}</span>, with a <span>{bean}</span> type of bean.
        <span>{grams}</span>
        {coffee !== 'capsule' && ' grind ala'}
        <span> {coffee !== 'capsule' && grind}</span>
        {coffee !== 'capsule' && ', '}
        sent to me
        <span> {deliver}</span>
        .”
      </blockquote>
    </div>
  );
}
