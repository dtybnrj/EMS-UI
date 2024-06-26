import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/EMS/api/v1/employees";

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployeesList(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmplyee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);               
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    updateEmployeeById(id,employee){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+id,employee);
    }

    getAttendanceByEmpId(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/getAttendance"+id);
    }
}

export default new EmployeeService();