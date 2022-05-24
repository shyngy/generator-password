import React from 'react';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img
        className={styles.headerIcon}
        src="./assets/images/header-icon.svg"
      />
    </div>
  );
};

export default Header;
