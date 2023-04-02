import React, { ReactNode } from 'react';

interface LabelWrapperProps {
  labelClassName: string;
  children: ReactNode;
  label?: string;
}

function LabelWrapper(props: LabelWrapperProps) {
  const { label, labelClassName } = props;

  return (
    <label className={`label ${labelClassName || ''}`}>
      {label || ''}
      {props.children}
    </label>
  );
}

export default LabelWrapper;
