import { useState } from "react";
import employeeApi from "../../api/employeeApi";
import Button from "../common/Button";

const EmployeeForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await employeeApi.addEmployee(formData);
    alert("Employee Added!");
    if (onClose) onClose();
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-md"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-md"
        />
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default EmployeeForm;
