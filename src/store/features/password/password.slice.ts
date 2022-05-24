import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import {
  createPassword,
  initialPasswordValues,
} from './utils/createPassword.utils';
import {
  checkboxesInitialValue,
  getCheckboxStatus,
} from './utils/checkbox.utils';
import { ChangeCheckboxStatus, PasswordState } from './types';

const initialState: PasswordState = {
  passwordValue: createPassword(),
  passwordLength: initialPasswordValues.length,
  checkboxes: checkboxesInitialValue,
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    makePassword(state) {
      const boxes = state.checkboxes;

      const password = createPassword({
        length: state.passwordLength,
        useLowerCase: getCheckboxStatus('lowerCase', boxes),
        useNumbers: getCheckboxStatus('number', boxes),
        useSpecialSymbols: getCheckboxStatus('specialSymbol', boxes),
        useUpperCase: getCheckboxStatus('upperCase', boxes),
      });

      state.passwordValue = password;
    },
    changeLength(state, action: PayloadAction<number>) {
      state.passwordLength = action.payload;
    },
    incrementPasswordLength(state) {
      if (state.passwordLength < 50) {
        state.passwordLength++;
      }
    },
    decrementPasswordLength(state) {
      if (state.passwordLength > 4) {
        state.passwordLength--;
      }
    },
    changeCheckboxStatus(state, action: PayloadAction<ChangeCheckboxStatus>) {
      const checkboxName = action.payload.name;

      const checkbox = {
        shortName: state.checkboxes[checkboxName].shortName,
        status: action.payload.value,
      };

      state.checkboxes = {
        ...state.checkboxes,
        [checkboxName]: checkbox,
      };
    },
  },
});

export const {
  incrementPasswordLength,
  decrementPasswordLength,
  changeLength,
  changeCheckboxStatus,
  makePassword,
} = passwordSlice.actions;

export const changeCheckboxValue =
  (name: ChangeCheckboxStatus['name'], value: boolean) =>
  (dispatch: Dispatch) => {
    dispatch(changeCheckboxStatus({ name, value }));
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

export const selectPassword = (state: RootState) =>
  state.password.passwordValue;

export const selectCheckboxes = (state: RootState) => state.password.checkboxes;

export const selectPasswordLength = (state: RootState) =>
  state.password.passwordLength;

export default passwordSlice.reducer;
