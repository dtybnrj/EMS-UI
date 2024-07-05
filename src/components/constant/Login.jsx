import React, { useState } from "react";
import { loginFields } from "./formField";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import EMSUserService from "../../services/EMSUserService";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    authenticateUser();
}

const authenticateUser = async () =>{
  try {
    const userData = await EMSUserService.login(loginState[0], loginState[1]);
    console.log(userData);
    if (userData.token) {
      localStorage.setItem("token", userData.token);
      localStorage.setItem("role", userData.role);
      navigate("/profile");
    } else {
      setError(userData.message);
    }
  } catch (error) {
    console.log(error);
    setError(error.message);
    setTimeout(() => {
      setError("");
    }, 5000);
  }
}

  return (
    <form className="mt-8 space-y-6">
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
      <FormExtra/>
      <FormAction handleSubmit={handleSubmit} text="Login"/>
    </form>
  );
}
