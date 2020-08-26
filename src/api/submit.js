import axios from 'axios/index';
import { feedback_url } from '../config/env';

const getHeaders = async () => {
    return {
        headers: {
          "Accept": "*/*",
          "Content-Type": "text/plain",
          'Access-Control-Allow-Origin': '*'
        },
    };
}

const post = async (body) => {
    console.log(body);
    const headers = await getHeaders();
    try {
      const response = await axios.post(feedback_url, {httpMethod: 'POST', body: body}, headers);
      return response.data;
    } catch (error) {
      throw error;
    }
};

export default { post };
