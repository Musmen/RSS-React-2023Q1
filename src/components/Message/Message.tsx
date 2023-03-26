import './Message.css';

import React, { Component } from 'react';

class Message extends Component<{ message: string }> {
  render() {
    return (
      <div className="Message__layout">
        <p className="Message__content">{this.props.message}</p>
      </div>
    );
  }
}

export default Message;
