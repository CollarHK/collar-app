import React from 'react';
import '../styles/message.scss';

const Message = (props) => {

  const { text } = props;

  return (
    <div className="message">
        <h3><span className="warn">!!!</span>本站只作分享作用，如對應援收費／派發有任何問題請直接與相關人士聯絡。<span className="warn">!!!</span></h3>
    </div>
  )
}

export default Message;
