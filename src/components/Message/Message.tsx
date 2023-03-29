import './Message.css';

import React from 'react';

interface MessageProps {
  message: string;
}

function Message({ message }: MessageProps) {
  return (
    <div className="Message__layout">
      <p className="Message__content">{message}</p>
    </div>
  );
}

export default Message;
