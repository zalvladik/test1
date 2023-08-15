export const postFetch = (title, body) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
};

export const fetchComments = postId => {
  const MAIN_URL = `https://jsonplaceholder.typicode.com`;

  return fetch(`${MAIN_URL}/posts/${postId}/comments`)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const getListPosts = () => {
  const MAIN_URL = 'https://jsonplaceholder.typicode.com';

  return fetch(`${MAIN_URL}/posts`)
    .then(response => response.json())
    .catch(error => console.log(error));
};
