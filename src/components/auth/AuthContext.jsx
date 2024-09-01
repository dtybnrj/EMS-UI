// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import EMSUserService from '../../services/EMSUserService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");

    const login = async (loginState) => {
        try {
            const userData = await EMSUserService.login(loginState['email-address'], loginState['password']);
            console.log(userData);
            if (userData.token) {
                setIsAuthenticated(true);
                localStorage.setItem("token", userData.token);
                localStorage.setItem("role", userData.role);
                return { success: true, role: userData.role }; // Return success and user role
            } else {
                setError(userData.message);
                return { success: false, message: userData.message };
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
            setTimeout(() => {
                setError("");
            }, 5000);
            return { success: false, message: error.message }; // Return failure information
        }
    };

    const logout = async () => {
        try {
            const response = await EMSUserService.logout();
            if (response.data) {
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                return { success: true }; // Indicate successful logout
            } else {
                return { success: false };
            }
        } catch (error) {
            console.log(error);
            return { success: false, message: error.message }; // Return failure information
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);