import React, { useState } from 'react';
import Friend from '../Friend/Friend';
import './Group.css';

const Group = ({ group }) => {
  const [showFriends, setShowFriends] = useState(false);

  const handleFriendClick = () => {
    setShowFriends(!showFriends);
  };

  return (
    <div className="group">
      <div className="group__avatar" style={{ backgroundColor: group.avatar_color }}>
        {group.name.charAt(0)}
      </div>
      <div className="group__info">
        <h2>{group.name}</h2>
        <p>Members: {group.members_count}</p>
        {group.friends?.length > 0 && (
          <>
            <p onClick={handleFriendClick} style={{ cursor: 'pointer' }}>Friends: {group.friends?.length}</p>
            {showFriends && (
              <div className="friends-list">
                {group.friends.map(friend => (
                  <Friend key={friend.id} friend={friend} />
                ))}
              </div>
            )}
          </>
        )}
        {group.closed && <p>Closed Group</p>}
      </div>
    </div>
  );
};

export default Group;