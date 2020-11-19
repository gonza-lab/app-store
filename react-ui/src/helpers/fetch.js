const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithToken = (endpoint, method = 'GET', data) => {
  const url = `${baseUrl}${endpoint}`;
  const token = localStorage.getItem('x-token');

  console.log(url);

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'x-token': token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchWithOutToken = (endpoint, method = 'GET', data) => {
  const url = `${baseUrl}${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};
