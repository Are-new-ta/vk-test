import React from 'react';
import Group from '../Group/Group';
import './GroupList.css';

const GroupList = ({ groups }) => {
  return (
    <div className="group-list">
      {groups.map(group => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  );
};

export default GroupList;
