import apiClient from './apiClient';

const authApi = {
    login: async (credentials) => {
        try {
            const response = await apiClient.post('/auth/login', credentials);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    register: async (userData) => {
        try {
            const response = await apiClient.post('/auth/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
    },

    getCurrentUser: async () => {
        try {
            const response = await apiClient.get('/auth/user');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    validateToken: async (token) => {
        const response = await apiClient.post("/auth/validate", { token });
        return response.data; // Should return { valid: true/false }
      },
};

export default authApi;
