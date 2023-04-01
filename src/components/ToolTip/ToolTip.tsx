import React from 'react';

interface ToolTipProps {
  className?: string;
  message?: string;
}

const DEFAULT_TOOL_TIP_PROPS = {
  className: '',
  message: '',
};

function ToolTip({ className, message }: ToolTipProps = DEFAULT_TOOL_TIP_PROPS) {
  return <span className={className}>{message}</span>;
}

export default ToolTip;
