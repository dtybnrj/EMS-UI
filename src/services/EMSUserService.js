import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/EMS/api/v1/employees";

class EMSUserService{

    static async login(email, password){
        try{
            const response = await axios.post(`${EMPLOYEE_API_BASE_URL}/auth/login`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'EMPLOYEE'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }
}

export default EMSUserService;