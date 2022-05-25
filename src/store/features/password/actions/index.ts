import { Dispatch } from '@reduxjs/toolkit';
import { passwordSlice } from '../password.slice';

import { ChangeCheckbox } from '../types';

export const {
  incrementPasswordLength,
  decrementPasswordLength,
  changeLength,
  changeCheckbox,
  makePassword,
} = passwordSlice.actions;

export const changeCheckboxValue =
  (name: ChangeCheckbox['name'], value: boolean) => (dispatch: Dispatch) => {
    dispatch(changeCheckbox({ name, value }));
    dispatch(makePassword());
  };

export const changePasswordLength = (value: number) => (dispatch: Dispatch) => {
  dispatch(changeLength(value));
  dispatch(makePassword());
};

export const modifyPasswordLength =
  (modification: 'increment' | 'decrement' | 'slider', value?: number) =>
  (dispatch: Dispatch) => {
    if (modification === 'slider' && value) dispatch(changeLength(value));
    if (modification === 'increment') dispatch(incrementPasswordLength());
    if (modification === 'decrement') dispatch(decrementPasswordLength());
    dispatch(makePassword());
  };
