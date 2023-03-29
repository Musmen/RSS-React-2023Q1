import React from 'react';

interface ToolTipProps {
  className: string;
  message: string;
}

function ToolTip({ className, message }: ToolTipProps) {
  return <span className={className}>{message}</span>;
}

export default ToolTip;
