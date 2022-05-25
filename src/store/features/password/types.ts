import { Checkboxes, CheckboxNames } from './utils/checkbox.utils';
import { securityLevels, SecurityLevel } from './utils/securityLevel';

export type PasswordState = {
  passwordValue: string;
  passwordLength: number;
  checkboxes: Checkboxes;
  securityLevel: SecurityLevel;
};
export interface ChangeCheckbox {
  name: CheckboxNames;
  value: boolean;
}
