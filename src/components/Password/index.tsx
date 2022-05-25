import React from 'react';
import copy from 'copy-to-clipboard';
import DoubleButton from '../DoubleButton';
import styles from './Password.module.scss';
import copyImage from '../../../assets/images/copy.svg';
import restartImage from '../../../assets/images/restart.svg';
import { useAppDispatch } from '../../store/hooks';
import { SecurityLevel } from '../../store/features/password/utils/securityLevel';
import { makePassword } from '../../store/features/password/actions';
interface PasswordProps {
  password: string;
  securityLevel: SecurityLevel;
}

const Password: React.FC<PasswordProps> = ({ password, securityLevel }) => {
  const dispatch = useAppDispatch();

  const onCopy = () => {
    copy(password);
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
        rightImage={copyImage}
        leftImage={restartImage}
      />
    </div>
  );
};

export default Password;
