export const TYPE_SELECT_OPTIONS = [
  { value: '', description: 'Select image type' },
  { value: 'photo', description: 'photo' },
  { value: 'graphics', description: 'graphics' },
  { value: 'painting', description: 'painting' },
  { value: 'map', description: 'map' },
  { value: 'plan', description: 'plan' },
  { value: 'drawing', description: 'drawing' },
  { value: 'sketch', description: 'sketch' },
  { value: 'other', description: 'other' },
];

export const INPUT_VALUE_LENGTH = {
  MIN: 3,
  MAX: 20,
};

const getLengthValidationErrorMessage = (
  minLength: string | number = INPUT_VALUE_LENGTH.MIN,
  maxLength: string | number = INPUT_VALUE_LENGTH.MAX
) => `
  ${minLength && `Min length is ${minLength}`} 
  ${maxLength && ` Max length is ${maxLength}`}
`;

export const VALIDATION_ERRORS_MESSAGES = {
  REQUIRED: 'The field is required!',
  DATE: 'Date cannot be in the future!',
  LENGTH: getLengthValidationErrorMessage(),
};
