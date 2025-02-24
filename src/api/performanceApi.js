import apiClient from './apiClient';

const performanceApi = {
    getEmployeePerformance: async (id) => {
        try {
            const response = await apiClient.get(`/performance/employee/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    submitReview: async (reviewData) => {
        try {
            const response = await apiClient.post('/performance/review', reviewData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default performanceApi;
