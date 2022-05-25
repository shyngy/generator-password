import React from 'react';
import {
  Checkboxes,
  CheckboxNames,
} from '../../store/features/password/utils/checkbox.utils';
import styles from './CheckboxesSection.module.scss';

interface CheckboxesSectionProps {
  checkboxes: Checkboxes;
  names: CheckboxNames[];
  changeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxesSection: React.FC<CheckboxesSectionProps> = ({
  names,
  changeCheckbox,
  checkboxes,
}) => {
  return (
    <section className={styles.checkboxSection}>
      <span className={styles.text}>Используемые символы:</span>
      <div className={styles.checkboxes}>
        {names.map((name, index) => {
          return (
            <label key={name + index}>
              <input
                type="checkbox"
                className={styles.checkbox}
                id={name}
                onChange={changeCheckbox}
                checked={checkboxes[name].status}
              />
              <span className={styles.checkboxStyle} />
              {checkboxes[name].shortName}
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default CheckboxesSection;
