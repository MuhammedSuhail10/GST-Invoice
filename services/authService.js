import axios from 'axios';
import ApiList from '../helpers/api';

export const sendOtp = async (data) => {
    try {
        const response = await axios.post(`${ApiList.SEND_OTP}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
        return response.status;
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ECONNABORTED') return 511;
        if (error.code === 'ETIMEDOUT' || !error.response) return 501;
    }
}