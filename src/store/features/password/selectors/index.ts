import { RootState } from '../../..';

export const selectPassword = (state: RootState) =>
  state.password.passwordValue;

export const selectSecurityLevel = (state: RootState) =>
  state.password.securityLevel;

export const selectCheckboxes = (state: RootState) => state.password.checkboxes;

export const selectPasswordLength = (state: RootState) =>
  state.password.passwordLength;
