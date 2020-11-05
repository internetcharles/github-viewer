import React from 'react';
import {  useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos);
  const loading = useSelector(state => state.loading);

  const repoMap = repos.map(repo => {
    return <li key={repo.name}>
      <p>{repo.name}</p>
      <a href={repo.url}>LINK</a>
    </li>;
  });

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>
      <a href={user.url}>Link</a>
      <br/>
      <ul>
        {repoMap}
      </ul>
    </div>
  );
};

export default Home;
