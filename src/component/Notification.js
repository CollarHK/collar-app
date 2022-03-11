import React from 'react';
import '../styles/notification.scss';

const Notification = (props) => {

  const { text } = props;

  return (
    <div className="notification">
      <p>{text}</p>
    </div>
  )
}

export default Notification;
