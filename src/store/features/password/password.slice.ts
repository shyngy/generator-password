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
import { ChangeCheckbox, PasswordState } from './types';
import { securityLevels, SecurityLevel } from './utils/securityLevel';
import { makePasswordReducer } from './reducers/makePassword';

const initialState: PasswordState = {
  passwordValue: createPassword(),
  passwordLength: initialPasswordValues.length,
  checkboxes: checkboxesInitialValue,
  securityLevel: securityLevels.good,
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    makePassword(state) {
      makePasswordReducer(state);
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
    changeCheckbox(state, action: PayloadAction<ChangeCheckbox>) {
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

// export const {
//   incrementPasswordLength,
//   decrementPasswordLength,
//   changeLength,
//   changeCheckbox,
//   makePassword,
// } = passwordSlice.actions;

export default passwordSlice.reducer;
