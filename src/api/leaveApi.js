import apiClient from './apiClient';

const leaveApi = {
    requestLeave: async (leaveData) => {
        try {
            const response = await apiClient.post('/leaves/request', leaveData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getLeavesByEmployee: async (employeeId) => {
        try {
            const response = await apiClient.get(`/leaves?employeeId=${employeeId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    approveLeave: async (id) => {
        try {
            const response = await apiClient.put(`/leaves/approve/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default leaveApi;
