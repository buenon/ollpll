import React, { FC } from "react";
import HomeButton from "../../HomeButton/HomeButton";
import styles from "./Home.module.scss";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    <HomeButton caption="OLL" path="/oll" />
    <HomeButton caption="PLL" path="/pll" />
  </div>
);

export default Home;
