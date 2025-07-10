import axios from 'axios';
import ApiList from './../helpers/api';

export const login = async (data) => {
    try {
        const response = await axios.post(`${ApiList.LOGIN}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
        return {"status": response.status, "data": response.data};
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ECONNABORTED') return {"status": 511, "message": "Check your internet connection and try again."};
        if (error.code === 'ETIMEDOUT' || !error.response) return {"status": 501, "message": "Request timed out. Please try again."};
        else if (error.response) {
            return {"status": error.response.status, "message": error.response.data.message || "An error occurred. Please try again."};
        } else {
            return {"status": 500, "message": "An unexpected error occurred. Please try again."};
        }
    }
}