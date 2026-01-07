
const myUrl = 'https://jsonplaceholder.typicode.com/users';

 async function getUserProfiles(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch user profiles');
  }
  return await response.json().then(data => data);
}


getUserProfiles(myUrl)  .then(profiles => console.log(profiles.map(profile => ({
    "name": profile.name,
    "email": profile.email,
    "company": profile.company.name
}))))
  .catch(error => console.error('Error:', error.message));