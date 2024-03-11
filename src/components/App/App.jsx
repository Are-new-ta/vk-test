import React, { useState, useEffect } from 'react';
import './App.css';
import initialGroups from '../../utils/groupsData'
import Filters from '../Filters/Filters';
import Group from '../Group/Group';

const App = () => {

  const [groups, setGroups] = useState(initialGroups);
  const [filteredGroups, setFilteredGroups] = useState(initialGroups);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (filterCriteria) => {
    let filtered = groups;

    if (filterCriteria.privacy) {
      filtered = filtered.filter(group => group.closed === (filterCriteria.privacy === 'closed'));
    }

    if (filterCriteria.avatarColor) {
      filtered = filtered.filter(group => group.avatar_color === filterCriteria.avatarColor);
    }

    if (filterCriteria.hasFriends) {
      filtered = filtered.filter(group => group.friends && group.friends.length > 0);
    }

    setFilteredGroups(filtered);
  }

  useEffect(() => {
    setLoading(false); // Устанавливаем loading в false, т.к. данные уже есть
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Filters handleFilterChange={handleFilterChange} />
      <div className="group-list">
        {filteredGroups.map(group => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
export default App;
// Компоненты Filters и Group остаются такими же как и в предыдущем примере
