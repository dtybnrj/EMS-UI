import apiClient from './apiClient';

const taskApi = {
    getAllProjects: async () => {
        try {
            const response = await apiClient.get('/projects');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createProject: async (projectData) => {
        try {
            const response = await apiClient.post('/projects', projectData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getTasksByProject: async (projectId) => {
        try {
            const response = await apiClient.get(`/tasks?projectId=${projectId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateTask: async (taskId, updatedData) => {
        try {
            const response = await apiClient.put(`/tasks/${taskId}`, updatedData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getAllTasks: async () => {
        const response = await apiClient.get("/tasks");
        return response.data;
      },
      getTaskById: async (id) => {
        const response = await apiClient.get(`/tasks/${id}`);
        return response.data;
      },
      createTask: async (taskData) => {
        const response = await apiClient.post("/tasks", taskData);
        return response.data;
      },
};

export default taskApi;
