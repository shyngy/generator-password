import { PasswordState } from '../types';
import { getCheckboxStatus } from '../utils/checkbox.utils';
import { createPassword } from '../utils/createPassword.utils';
import { securityLevels } from '../utils/securityLevel';

export function makePasswordReducer(state: PasswordState) {
  const boxes = state.checkboxes;
  const password = createPassword({
    length: state.passwordLength,
    useLowerCase: getCheckboxStatus('lowerCase', boxes),
    useNumbers: getCheckboxStatus('number', boxes),
    useSpecialSymbols: getCheckboxStatus('specialSymbol', boxes),
    useUpperCase: getCheckboxStatus('upperCase', boxes),
  });

  const levels = Object.values(securityLevels).sort(
    (a, b) => a.level - b.level
  );

  for (let index = 0; index < levels.length; index++) {
    if (state.passwordLength <= levels[index].level) {
      state.securityLevel = levels[index];

      break;
    } else {
      state.securityLevel = levels[index];
    }
  }

  state.passwordValue = password;
}
