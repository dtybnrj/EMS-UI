import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/EMS/api/v1/employees";

const token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: EMPLOYEE_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

class EmployeeService {
    saveEmployee(employee){
        return apiClient.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployeesList(){
        return apiClient.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmplyee(id){
        return apiClient.delete(EMPLOYEE_API_BASE_URL+"/"+id);               
    }

    getEmployeeById(id){
        return apiClient.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    updateEmployeeById(id,employee){
        return apiClient.put(EMPLOYEE_API_BASE_URL+"/"+id,employee);
    }

    getAttendanceByEmpId(id){
        return apiClient.get(EMPLOYEE_API_BASE_URL+"/getAttendance"+id);
    }
}

export default new EmployeeService();