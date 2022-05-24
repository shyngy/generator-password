import React from 'react';
import {
  modifyPasswordLength,
  selectPasswordLength,
} from '../../store/features/password/password.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import DoubleButton from '../DoubleButton';
import LengthSlider from '../LengthSlider';
import styles from './LengthSettings.module.scss';
import leftImage from '../../../assets/images/plus.svg';
import rightImage from '../../../assets/images/minus.svg';

const LengthSettings = () => {
  const dispatch = useAppDispatch();
  const passwordLength = useAppSelector(selectPasswordLength);

  const rightDisabled = passwordLength >= 50;
  const leftDisabled = passwordLength <= 4;

  const onChangeLength = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(modifyPasswordLength('slider', +event.target.value));

  const onDecrement = () => dispatch(modifyPasswordLength('decrement'));
  const onIncrement = () => dispatch(modifyPasswordLength('increment'));

  return (
    <section className={styles.settings}>
      Длинна пароля:<strong className={styles.length}>{passwordLength}</strong>
      <LengthSlider length={passwordLength} onChangeLength={onChangeLength} />
      <DoubleButton
        leftImage={leftImage}
        rightImage={rightImage}
        rightDisabled={rightDisabled}
        leftDisabled={leftDisabled}
        onClickLeftButton={onDecrement}
        onClickRightButton={onIncrement}
      />
    </section>
  );
};

export default LengthSettings;
