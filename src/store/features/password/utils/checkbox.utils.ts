export type CheckboxNames = keyof typeof checkboxesInitialValue;
export type Checkboxes = typeof checkboxesInitialValue;

export const checkboxesInitialValue = {
  upperCase: {
    status: false,
    shortName: 'ABC',
  },
  lowerCase: {
    status: true,
    shortName: 'abc',
  },
  number: {
    status: true,
    shortName: '123',
  },
  specialSymbol: {
    status: false,
    shortName: '@#$',
  },
};

export const getCheckboxStatus = (
  name: CheckboxNames,
  context?: Checkboxes
) => {
  const ctx = context || checkboxesInitialValue;
  return ctx[name].status;
};
