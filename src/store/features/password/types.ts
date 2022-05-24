import { Checkboxes, CheckboxNames } from './utils/checkbox.utils';

export interface PasswordState {
  passwordValue: string;
  passwordLength: number;
  checkboxes: Checkboxes;
}
export interface ChangeCheckboxStatus {
  name: CheckboxNames;
  value: boolean;
}
