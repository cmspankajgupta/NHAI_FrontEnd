import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();
console.log(id)
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Slug: {id}</p>
    </div>
  );
};

export default ProfilePage;
