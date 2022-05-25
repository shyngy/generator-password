import { getCheckboxStatus } from './checkbox.utils';
export const initialPasswordValues = {
  length: 12,
  useUpperCase: getCheckboxStatus('upperCase'),
  useLowerCase: getCheckboxStatus('lowerCase'),
  useSpecialSymbols: getCheckboxStatus('specialSymbol'),
  useNumbers: getCheckboxStatus('number'),
};

export function createPassword(options = initialPasswordValues): string {
  let result = '';
  let characters = '';
  let appliedOptions: string[] = [];

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const specialSymbols = '!#@%&?$+–_"<>';
  const numbers = '0123456789';

  function bundler(option: boolean, value: string) {
    if (option) appliedOptions.push(value);
  }
  bundler(options.useLowerCase, lowerCaseLetters);
  bundler(options.useUpperCase, upperCaseLetters);
  bundler(options.useNumbers, numbers);
  bundler(options.useSpecialSymbols, specialSymbols);

  characters = appliedOptions.join('');

  const charactersLength = characters.length;

  for (let i = 0; i < options.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  const includeOptions = appliedOptions.map((item) => {
    return includesSection(item, result);
  });

  const noOptions = includeOptions.every((item) => item === false);
  if (noOptions) return 'установите опции';

  const used = includeOptions.every((item) => item === true);
  if (!used) {
    return createPassword(options);
  }

  return result;
}

function includesSection(option: string, result: string) {
  let isInclude = false;
  const optionsItems = option.split('');
  const resultLetters = result.split('');
  for (let index = 0; index < resultLetters.length; index++) {
    const current = resultLetters[index];
    if (isInclude) break;
    for (let idx = 0; idx < optionsItems.length; idx++) {
      if (current === optionsItems[idx]) {
        isInclude = true;
        break;
      }
    }
  }
  return isInclude;
}
