import React from 'react';

const Message = (props) => {
  return (
    <li className="list-group-item">
      <div className="header">
        <p className="name">
          {props.message.author}
        </p>
        <p className="created-at">
          {props.message.created_at}
        </p>
      </div>
      <p>
        {props.message.content}
      </p>
    </li>
  );
};

export default Message;
