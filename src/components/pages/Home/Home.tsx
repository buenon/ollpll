import React, { FC } from 'react';
import Button from '../../HomeButton/Button';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Home}>
      <Button className={styles.HomeButton} onClick={() => navigate('/oll')}>
        OLL
      </Button>
      <Button className={styles.HomeButton} onClick={() => navigate('/pll')}>
        PLL
      </Button>
    </div>
  );
};

export default Home;
