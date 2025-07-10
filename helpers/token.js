import AsyncStorage from '@react-native-async-storage/async-storage';
const TOKEN_KEY = 'userToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const TokenService = {
    // Save Name
    async saveName(name) {
        try {
            let name = name.charAt(0).toUpperCase() + name.slice(1);
            await AsyncStorage.setItem('name', name);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Get Name
    async getName() {
        try {
            const name = await AsyncStorage.getItem('name');
            return name;
        } catch (error) {
            return null;
        }
    },

    // Remove Name
    async removeName() {
        try {
            await AsyncStorage.removeItem('name');
            return true;
        } catch (error) {
            return false;
        }
    },

    // Save token
    async saveToken(token) {
        try {
            await AsyncStorage.setItem(TOKEN_KEY, token);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Get token
    async getToken() {
        try {
            const token = await AsyncStorage.getItem(TOKEN_KEY);
            return token;
        } catch (error) {
            return null;
        }
    },

    // Remove token
    async removeToken() {
        try {
            await AsyncStorage.removeItem(TOKEN_KEY);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Save refresh token
    async saveRefreshToken(refreshToken) {
        try {
            await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Get refresh token
    async getRefreshToken() {
        try {
            const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
            return refreshToken;
        } catch (error) {
            return null;
        }
    },

    // Remove refresh token
    async removeRefreshToken() {
        try {
            await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Check if user is authenticated
    async isAuthenticated() {
        try {
            const token = await this.getToken();
            return token !== null && token !== '';
        } catch (error) {
            return false;
        }
    },

    // Delete all data
    async deleteAllData() {
        try {
            await AsyncStorage.clear();
            return true;
        } catch (error) {
            return false;
        }
    }
};

export default TokenService;