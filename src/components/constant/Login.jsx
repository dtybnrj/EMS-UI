import React, { useState } from "react";
import { loginFields } from "./formField";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  }

  const authenticateUser = async () => {
    const result = await login(loginState);
    if (result.success) {
      if (result.role === 'ADMIN') {
        navigate('/employeeList');
      } else {
        navigate('/profile');
      }
    } else {
      console.error(result.message);
    }
  }

  return (
    <form className="mt-8 space-y-6 w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
