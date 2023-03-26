import React, { Component } from 'react';

class ToolTip extends Component<{ className: string; message: string }> {
  render() {
    const { className, message } = this.props;
    return <span className={className}>{message}</span>;
  }
}

export default ToolTip;
