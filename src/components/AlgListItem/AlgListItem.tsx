import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import styles from './AlgListItem.module.scss';
import { Alg } from '../../algs';

interface AlgListItemProps {
  alg: Alg;
}

const AlgListItem: FC<AlgListItemProps> = ({ alg }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (alg.hasVideo) {
      navigate(`/video/${alg.id}`);
    }
  };

  return (
    <div className={`${styles.AlgListItem} ${alg.hasVideo ? styles.HasVideo : ''}`} onClick={handleClick}>
      <img src={`assets/img/${alg.id}.gif`} alt={alg.id} />
      <div className={styles.Alg}>{alg.alg}</div>
    </div>
  );
};

export default AlgListItem;
