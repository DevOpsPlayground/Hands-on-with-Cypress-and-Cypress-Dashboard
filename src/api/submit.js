import axios from 'axios/index';
import {token, feedback_url} from '../config/env';

const getHeaders = async () => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

const post = async (body) => {
    console.log(body);
    const headers = await getHeaders();
    try {
      const response = await axios.post(feedback_url, body, headers);
      return response.data;
    } catch (error) {
      throw error;
    }
};

export default { post };