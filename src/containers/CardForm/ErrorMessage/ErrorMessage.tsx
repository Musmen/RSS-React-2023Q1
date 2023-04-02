import './ErrorMessage.css';

import React from 'react';
import Message from '../../../components/Message/Message';

function ErrorMessage({ errorMessage }: { errorMessage: string | undefined }) {
  return (
    <Message classNames={{ wrapper: 'CardForm-validation-error-message' }} message={errorMessage} />
  );
}

export default ErrorMessage;
