export const getTodayDateISOString = () => new Date().toISOString().split('T')[0];

export const getRangeValidationErrorMessage = (
  minLength: string | number,
  maxLength: string | number
) => `
  ${minLength && `Min length is ${minLength}`} 
  ${maxLength && ` Max length is ${maxLength}`}
`;
