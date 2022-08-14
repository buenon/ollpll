import React, { FC } from "react";
import { Alg } from "../../../algs";
import styles from "./AlgsPage.module.scss";

interface AlgsPageProps {
  title: string;
  algs: Alg[];
  hasVideos?: boolean;
}

const AlgsPage: FC<AlgsPageProps> = ({ title, algs, hasVideos }) => {
  return (
    <div className={styles.AlgsPage}>
      <h1>{title}</h1>
    </div>
  );
};

export default AlgsPage;
