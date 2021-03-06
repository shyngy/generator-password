import React from 'react';
import { changeCheckboxValue } from '../../store/features/password/actions';
import {
  selectCheckboxes,
  selectPassword,
  selectSecurityLevel,
} from '../../store/features/password/selectors';
import { CheckboxNames } from '../../store/features/password/utils/checkbox.utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import CheckboxesSection from '../CheckboxesSection';
import LengthSettings from '../LengthSettings';
import Password from '../Password';
import styles from './PasswordSection.module.scss';

const PasswordSection = () => {
  const dispatch = useAppDispatch();
  const password = useAppSelector(selectPassword);
  const securityLevel = useAppSelector(selectSecurityLevel);
  const checkboxes = useAppSelector(selectCheckboxes);
  const checkboxNames = Object.keys(checkboxes) as CheckboxNames[];

  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const id = event.target.id as keyof typeof checkboxes;
    dispatch(changeCheckboxValue(id, checked));
  };

  return (
    <div className={styles.mainPassword}>
      <div className={styles.passwordSection}>
        <Password securityLevel={securityLevel} password={password} />
        <LengthSettings />
        <CheckboxesSection
          checkboxes={checkboxes}
          names={checkboxNames}
          changeCheckbox={changeCheckbox}
        />
      </div>
    </div>
  );
};

export default PasswordSection;
