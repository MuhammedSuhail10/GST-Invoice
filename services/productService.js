import axios from 'axios';
import ApiList from '../helpers/api';

export const fetchProduct = async (token: string) => {
    try {
        const response = await axios.get(`${ApiList.FETCH_PRODUCT}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            timeout: 10000,
        });
        return {"status": response.status, "data": response.data};
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ECONNABORTED') return {"status": 511, "message": "Check your internet connection and try again."};
        if (error.code === 'ETIMEDOUT' || !error.response) return {"status": 501, "message": "Request timed out. Please try again."};
        else if (error.response) {
            console.log(error.response)
            return {"status": error.response.status, "message": error.response.data.message || "An error occurred. Please try again."};
        } else {
            return {"status": 500, "message": "An unexpected error occurred. Please try again."};
        }
    }
}

export const createProduct = async (token, data) => {
    try {
        const response = await axios.post(`${ApiList.CREATE_PRODUCT}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            timeout: 10000,
        });
        return {"status": response.status, "data": response.data};
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ECONNABORTED') return {"status": 511, "message": "Check your internet connection and try again."};
        if (error.code === 'ETIMEDOUT' || !error.response) return {"status": 501, "message": "Request timed out. Please try again."};
        else if (error.response) {
            console.log(error.response)
            return {"status": error.response.status, "message": error.response.data.message || "An error occurred. Please try again."};
        } else {
            return {"status": 500, "message": "An unexpected error occurred. Please try again."};
        }
    }
}