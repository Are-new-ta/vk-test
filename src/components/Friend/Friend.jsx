import React from 'react';
import './Friend.css';

const Friend = ({ friend }) => {
  return (
    <div className="friend">
      {friend.first_name} {friend.last_name}
    </div>
  );
};

export default Friend;
