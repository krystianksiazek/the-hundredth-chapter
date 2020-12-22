import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://krystianksiazek.github.io/hundredthchapterdata/db.json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'aplication/json',
  },
});
