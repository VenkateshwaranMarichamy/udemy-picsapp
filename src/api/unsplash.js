import axios from'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 61Jo9FmkdP6_Z88Dh3FE2siM9Mlod8g1YB62P5KlAtM'
      },
});