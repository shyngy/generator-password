import React from 'react';
import DoubleButton from '../DoubleButton';
import styles from './Password.module.scss';
import copy from '../../../assets/images/copy.svg';
import restart from '../../../assets/images/restart.svg';
import { useAppDispatch } from '../../store/hooks';
import { makePassword } from '../../store/features/password/password.slice';
interface PasswordProps {
  password: string;
}

const Password: React.FC<PasswordProps> = ({ password }) => {
  const dispatch = useAppDispatch();

  const onCopy = () => {
    navigator.clipboard.writeText(password);
  };

  const onRestart = () => {
    dispatch(makePassword());
  };

  return (
    <div className={styles.passwordSection}>
      <div className={styles.password}>
        <span className={styles.passwordText}>{password}</span>
        <span className={styles.securityLevel}>ОЧЕНЬ НЕНАДЕЖНЫЙ</span>
      </div>
      <DoubleButton
        onClickLeftButton={onRestart}
        onClickRightButton={onCopy}
        rightImage={copy}
        leftImage={restart}
      />
    </div>
  );
};

export default Password;
