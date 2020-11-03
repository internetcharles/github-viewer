export const getInfo = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(res => ({
      username: res.login,
      following: res.following,
      followers: res.followers,
      url: res.url
    }));
};
