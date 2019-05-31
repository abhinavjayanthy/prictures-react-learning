import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fbc8b0c49ee83356f302f3e25961c7e6705366fa760fbcdbe885dd52cacd2bc5',
  },
});
