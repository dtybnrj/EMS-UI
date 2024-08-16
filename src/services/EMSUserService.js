import axios from "axios";

const EMS_AUTH_BASE_URL = "http://localhost:8080/EMS/auth/";

class EMSUserService{

    static async login(email, password){
        try{
            const response = await axios.post(`${EMS_AUTH_BASE_URL}login`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async register(register){
        try{
            const response = await axios.post(`${EMS_AUTH_BASE_URL}register`, register)
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