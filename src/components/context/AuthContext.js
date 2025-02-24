import { createContext, useState, useEffect } from "react";
import authApi from "../../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // Function to log in and store token
  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT
    setAuth({ token, role: decoded.role });
  };

  // Function to log out and clear token
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  // Function to check token validity with backend
  const validateToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return logout();

    try {
      const response = await authApi.validateToken(token);
      if (response.valid) {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setAuth({ token, role: decoded.role });
      } else {
        logout(); // Token invalid → Logout user
      }
    } catch (error) {
      logout(); // Server error → Logout user
    }
  };

  // Validate token when app loads
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
