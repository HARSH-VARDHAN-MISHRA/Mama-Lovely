import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="text-center mb-4" style={{ color: 'var(--bg-dark-blue)' }}>Welcome To Mama Lovely Toy Admin Panel</h2>
    </div>
  );
};

export default Dashboard;
