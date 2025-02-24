import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
import authApi from "../../api/authApi";
import InputField from "../common/InputField";
import Button from "../common/Button";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ Get login function from context

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authApi.login(credentials);
      localStorage.setItem("token", data);

      // Decode JWT Token to Extract Role
      const decoded = JSON.parse(atob(data.split(".")[1]));
      const role = decoded.role;

      login(data); // ✅ Update auth state in context

      // Redirect based on role
      if (role === "ADMIN") {
        navigate("/"); // Admin → Dashboard
      } else if (role === "EMPLOYEE") {
        navigate("/tasks"); // Employee → Tasks
      }
    } catch (error) {
      alert("Login Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <InputField label="Email" type="email" name="email" value={credentials.email} onChange={handleChange} />
      <InputField label="Password" type="password" name="password" value={credentials.password} onChange={handleChange} />
      <Button text="Login" type="submit" />
    </form>
  );
};

export default LoginForm;
