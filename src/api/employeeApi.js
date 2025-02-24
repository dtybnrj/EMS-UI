import apiClient from './apiClient';

const employeeApi = {
    getAllEmployees: async () => {
        try {
            const response = await apiClient.get('/employees');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getEmployeeById: async (id) => {
        try {
            const response = await apiClient.get(`/employees/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    addEmployee: async (employeeData) => {
        try {
            const response = await apiClient.post('/employees', employeeData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateEmployee: async (id, updatedData) => {
        try {
            const response = await apiClient.put(`/employees/${id}`, updatedData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteEmployee: async (id) => {
        try {
            const response = await apiClient.delete(`/employees/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default employeeApi;
