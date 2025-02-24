import { useState } from "react";
import authApi from "../../api/authApi";
import InputField from "../common/InputField";
import Button from "../common/Button";

const RegisterForm = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.register(userData);
      alert(response);
    } catch (error) {
      alert("Registration Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <InputField label="Name" type="text" name="name" value={userData.name} onChange={handleChange} />
      <InputField label="Email" type="email" name="email" value={userData.email} onChange={handleChange} />
      <InputField label="Password" type="password" name="password" value={userData.password} onChange={handleChange} />
      <Button text="Register" type="submit" />
    </form>
  );
};

export default RegisterForm;
