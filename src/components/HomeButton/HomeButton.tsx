import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeButton.module.scss";

interface HomeButtonProps {
  caption: string;
  path: string;
}

const HomeButton: FC<HomeButtonProps> = ({ caption, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={styles.HomeButton} onClick={handleClick}>
      {caption}
    </div>
  );
};

export default HomeButton;
