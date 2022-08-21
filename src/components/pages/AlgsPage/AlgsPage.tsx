import React, { FC } from 'react';
import { Alg } from '../../../algs';
import AlgList from '../../AlgList/AlgList';
import styles from './AlgsPage.module.scss';

interface AlgsPageProps {
  title: string;
  algs: Alg[];
}

const AlgsPage: FC<AlgsPageProps> = ({ title, algs }) => {
  return (
    <div className={styles.AlgsPage}>
      <div className={styles.Title}>{title}</div>
      <AlgList algs={algs} />
    </div>
  );
};

export default AlgsPage;
