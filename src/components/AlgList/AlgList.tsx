import React, { FC } from "react";
import styles from "./AlgList.module.scss";

interface AlgListProps {}

const AlgList: FC<AlgListProps> = () => {
  return <div className={styles.AlgList}>AlgList Component</div>;
};

export default AlgList;
