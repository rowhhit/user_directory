import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import '../style/UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!user) return <p>User not found</p>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city} - {user.address.zipcode}
      </p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserDetails;
