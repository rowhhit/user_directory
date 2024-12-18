import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import '../style/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('');

  // Fetch Users from API
  const fetchUsers = async () => {
    if (!hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=4`
      );
      setUsers((prevUsers) => [...prevUsers, ...response.data]);
      if (response.data.length === 0) setHasMore(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  // Infinite scrolling
  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 5
    ) {
      if (!loading && hasMore) setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  // Filter and sort users
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField === 'name') return a.name.localeCompare(b.name);
      if (sortField === 'email') return a.email.localeCompare(b.email);
      return 0;
    });

  return (
    <div className="container">
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <select onChange={(e) => setSortField(e.target.value)} className="sort-dropdown">
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              <img
                src={`https://picsum.photos/seed/${user.id}/50/50`}
                alt="Profile"
                className="profile-picture"
              />
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </Link>
          </li>
        ))}
      </ul>
      {loading && <LoadingSpinner />}
      {!hasMore && <p>No more users to load.</p>}
    </div>
  );
};

export default UserList;
