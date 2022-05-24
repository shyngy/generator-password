import React from 'react';
import styles from './DoubleButton.module.scss';

interface DoubleButtonProps {
  rightImage: string;
  leftImage: string;
  rightDisabled?: boolean;
  leftDisabled?: boolean;
  onClickLeftButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickRightButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DoubleButton: React.FC<DoubleButtonProps> = ({
  onClickLeftButton,
  onClickRightButton,
  leftDisabled,
  rightDisabled,
  leftImage,
  rightImage,
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        disabled={leftDisabled}
        className={styles.leftButton}
        onClick={onClickLeftButton}
      >
        <img src={leftImage} alt="leftImage" />
      </button>
      <button
        disabled={rightDisabled}
        className={styles.rightButton}
        onClick={onClickRightButton}
      >
        <img src={rightImage} alt="rightImage" />
      </button>
    </div>
  );
};

export default DoubleButton;
