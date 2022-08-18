import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import styles from './AlgListItem.module.scss';

interface AlgListItemProps {
  id: string;
  alg: string;
  hasVideo?: boolean;
}

const AlgListItem: FC<AlgListItemProps> = ({ id, alg, hasVideo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (hasVideo) {
      navigate(`/video/${id}`);
    }
  };

  return (
    <div className={`${styles.AlgListItem} ${hasVideo ? styles.HasVideo : ''}`} onClick={handleClick}>
      <img src={`assets/img/${id}.gif`} alt={id} />
      <div className={styles.Alg}>{alg}</div>
    </div>
  );
};

export default AlgListItem;
