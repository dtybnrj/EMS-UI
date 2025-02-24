import apiClient from './apiClient';

const attendanceApi = {
    checkIn: async () => {
        try {
            const response = await apiClient.post('/attendance/checkin');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    checkOut: async () => {
        try {
            const response = await apiClient.post('/attendance/checkout');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAttendanceByDate: async (date) => {
        try {
            const response = await apiClient.get(`/attendance?date=${date}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default attendanceApi;
