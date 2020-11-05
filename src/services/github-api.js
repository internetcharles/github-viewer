export const getInfo = async(username) => {
  const user = await fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      url: json.html_url,
      followers: json.followers,
      following: json.following
    }));

  const repos = await fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      name: repo.name,
      url: repo.html_url
    })));

  return { user, repos };
};
