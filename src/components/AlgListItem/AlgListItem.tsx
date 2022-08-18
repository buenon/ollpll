import React, { FC } from 'react';
import styles from './AlgListItem.module.scss';

interface AlgListItemProps {
  id: string;
  alg: string;
  hasVideo?: boolean;
}

const AlgListItem: FC<AlgListItemProps> = ({ id, alg, hasVideo }) => {
  return (
    <div className={styles.AlgListItem}>
      <img src={`assets/img/${id}.gif`} alt={id} />
      <div className={styles.Alg}>{alg}</div>
    </div>
  );
};

export default AlgListItem;
