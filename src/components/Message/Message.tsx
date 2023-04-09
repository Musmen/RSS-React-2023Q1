import './Message.css';

import React from 'react';

interface MessageProps {
  classNames?: {
    wrapper?: string;
    message?: string;
  };
  message?: string;
}

const DEFAULT_MESSAGE_PROPS = {
  classNames: {
    wrapper: '',
    message: '',
  },
  message: '',
};

function Message(props: MessageProps = DEFAULT_MESSAGE_PROPS) {
  const { classNames, message } = props;

  return (
    <p className={classNames?.wrapper}>
      <span className={classNames?.message}>{message}</span>
    </p>
  );
}

export default Message;
