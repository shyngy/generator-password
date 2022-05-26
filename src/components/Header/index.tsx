import React from 'react';
import styles from './Header.module.scss';
import headerImage from '../../../assets/images/header-icon.svg';
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.headerIcon} src={headerImage} />
    </div>
  );
};

export default Header;
