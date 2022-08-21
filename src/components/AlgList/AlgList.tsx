import React, { FC } from 'react';
import { Alg } from '../../algs';
import AlgListItem from '../AlgListItem/AlgListItem';
import styles from './AlgList.module.scss';

interface AlgListProps {
  algs: Alg[];
}

const AlgList: FC<AlgListProps> = ({ algs }) => {
  return (
    <div className={styles.AlgList}>
      {algs.map((alg) => {
        return <AlgListItem alg={alg} />;
      })}
    </div>
  );
};

export default AlgList;
