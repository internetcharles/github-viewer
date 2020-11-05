import React from 'react';
import {  useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.loading);

  if(loading) return <h1>Loading...</h1>;
  

  return (
    <div>
      <h1>{user.username}</h1>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>
      <a href={user.url}>Link</a>
    </div>
  );
};

export default Home;
