import React, { FC } from 'react';
import styles from './Oll.module.scss';

interface OllProps {}

const Oll: FC<OllProps> = () => (
  <div className={styles.Oll}>
    Oll Component
  </div>
);

export default Oll;
