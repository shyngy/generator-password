import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import DoubleButton from '../DoubleButton';
import LengthSlider from '../LengthSlider';
import styles from './LengthSettings.module.scss';
import plusImage from '../../../assets/images/plus.svg';
import minusImage from '../../../assets/images/minus.svg';
import { modifyPasswordLength } from '../../store/features/password/actions';
import { selectPasswordLength } from '../../store/features/password/selectors';

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
        leftImage={minusImage}
        rightImage={plusImage}
        rightDisabled={rightDisabled}
        leftDisabled={leftDisabled}
        onClickLeftButton={onDecrement}
        onClickRightButton={onIncrement}
      />
    </section>
  );
};

export default LengthSettings;
