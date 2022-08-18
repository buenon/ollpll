import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={`${styles.HomeButton} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
