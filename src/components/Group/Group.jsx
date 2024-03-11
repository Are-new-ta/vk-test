import React from 'react';
import './Group.css';

const Group = ({ group }) => {
  return (
    <div className="group">
      <div className="group__avatar" style={{ backgroundColor: group.avatar_color }}>
        {group.name.charAt(0)}
      </div>
      <div className="group__info">
        <h2>{group.name}</h2>
        <p>Members: {group.members_count}</p>
        {group.friends?.length > 0 && (
          <p>Friends: {group.friends.map(friend => `${friend.first_name} ${friend.last_name}`).join(', ')}</p>
          // <p>Friends: {group.friends?.length}</p>
        )}
        {group.closed && <p>Closed Group</p>}
      </div>
    </div>
  );
};

export default Group;
