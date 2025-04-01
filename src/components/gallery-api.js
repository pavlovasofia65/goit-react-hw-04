import axios from 'axios'

const key = 'pwrvRKN0wakqlu-l3I8PUgYcHAPBjzENYgyQdtIGexs';

axios.defaults.baseURL = `https://api.unsplash.com`;

const fetchPhotos = async (search, page = 1) => {
    try {
        const response = await axios.get('search/photos', {
            params:
            {
                query: search,
                per_page: 15,
                orientation: 'landscape',
                client_id: key,
                page: page,
                }
        });
        return response.data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
    
}

export default fetchPhotos;