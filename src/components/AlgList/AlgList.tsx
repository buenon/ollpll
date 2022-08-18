import React, { FC } from 'react';
import { Alg } from '../../algs';
import AlgListItem from '../AlgListItem/AlgListItem';
import styles from './AlgList.module.scss';

interface AlgListProps {
  algs: Alg[];
  hasVideo?: boolean;
}

const AlgList: FC<AlgListProps> = ({ algs, hasVideo }) => {
  return (
    <div className={styles.AlgList}>
      {algs.map((alg) => {
        return <AlgListItem id={alg.id} alg={alg.alg} hasVideo={hasVideo} />;
      })}
    </div>
  );
};

export default AlgList;
