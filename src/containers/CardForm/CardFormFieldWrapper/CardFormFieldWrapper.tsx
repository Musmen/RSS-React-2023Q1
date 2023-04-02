import React, { ReactNode } from 'react';

import LabelWrapper from '../../../components/LabelWrapper/LabelWrapper';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface CardFormFieldWrapperProps {
  errorMessage: string | undefined;
  children: ReactNode;
  label?: string;
  additionalClass?: string;
}

function CardFormFieldWrapper(props: CardFormFieldWrapperProps) {
  const { errorMessage, label, additionalClass } = props;

  return (
    <div className="CardForm-field field-container">
      <LabelWrapper labelClassName={`CardForm-label ${additionalClass || ''}`} label={label}>
        {props.children}
      </LabelWrapper>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
}

export default CardFormFieldWrapper;
