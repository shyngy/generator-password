import React from 'react';
import DoubleButton from '../DoubleButton';
import styles from './Password.module.scss';
import copy from '../../../assets/images/copy.svg';
import restart from '../../../assets/images/restart.svg';
import { useAppDispatch } from '../../store/hooks';
import { makePassword } from '../../store/features/password/password.slice';
import { SecurityLevel } from '../../store/features/password/utils/securityLevel';
interface PasswordProps {
  password: string;
  securityLevel: SecurityLevel;
}

const Password: React.FC<PasswordProps> = ({ password, securityLevel }) => {
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
        <span
          style={{ background: securityLevel.color }}
          className={styles.securityLevel}
        >
          {securityLevel.name}
        </span>
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
