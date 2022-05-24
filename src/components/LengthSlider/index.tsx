import React from 'react';
import styles from './Slider.module.scss';

interface LengthSliderProps {
  length: number;
  onChangeLength: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LengthSlider: React.FC<LengthSliderProps> = ({
  length,
  onChangeLength,
}) => {
  return (
    <div className={styles.slider}>
      <input
        onChange={onChangeLength}
        className={styles.sliderInput}
        type="range"
        min="4"
        value={length}
        max="50"
      />
    </div>
  );
};

export default LengthSlider;
