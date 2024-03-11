import React, { useState } from 'react';

const Filters = ({ handleFilterChange }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    privacy: '',
    avatarColor: '',
    hasFriends: false
  });

  const handlePrivacyChange = (e) => {
    setFilterCriteria({
      ...filterCriteria,
      privacy: e.target.value
    });
  };

  const handleAvatarColorChange = (e) => {
    setFilterCriteria({
      ...filterCriteria,
      avatarColor: e.target.value
    });
  };

  const handleFriendsChange = (e) => {
    setFilterCriteria({
      ...filterCriteria,
      hasFriends: e.target.checked
    });
  };

  const applyFilters = () => {
    // Simulate server delay
    setTimeout(() => {
      handleFilterChange(filterCriteria);
    }, 1000);
  };

  return (
    <div className="filters">
      <label>
        Privacy:
        <select value={filterCriteria.privacy} onChange={handlePrivacyChange}>
          <option value="">All</option>
          <option value="closed">Closed</option>
          <option value="open">Open</option>
        </select>
      </label>
      <label>
        Avatar Color:
        <input type="text" value={filterCriteria.avatarColor} onChange={handleAvatarColorChange} />
      </label>
      <label>
        Has Friends:
        <input type="checkbox" checked={filterCriteria.hasFriends} onChange={handleFriendsChange} />
      </label>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;

