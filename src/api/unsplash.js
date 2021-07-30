import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID N0hj4SDf1e7CQ7gqyIUBZ2zXg7LlsffdUaIWlIt2Rqk'
    }
});