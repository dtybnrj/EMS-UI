import { useEffect, useState } from "react";
import taskApi from "../../api/taskApi";
import employeeApi from "../../api/employeeApi";
import Button from "../common/Button";

const TaskForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ title: "", description: "", status: "PENDING", employeeId: "" });
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await employeeApi.getAllEmployees();
      setEmployees(response);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await taskApi.createTask(formData);
      alert("Task Assigned Successfully!");
      if (onClose) onClose();
    } catch (error) {
      console.error("Error assigning task:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Assign Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border mb-2 rounded-md" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border mb-2 rounded-md"></textarea>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Employee..."
          className="w-full p-2 border mb-2 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Employee Dropdown */}
        <select name="employeeId" onChange={handleChange} className="w-full p-2 border mb-2 rounded-md">
          <option value="">Select Employee</option>
          {employees
            .filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()))
            .map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.name}</option>
            ))}
        </select>

        <select name="status" onChange={handleChange} className="w-full p-2 border mb-2 rounded-md">
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>

        <Button text="Assign Task" type="submit" />
        <button onClick={onClose} className="ml-2 text-red-500 underline">Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;
