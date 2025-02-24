import EmployeeList from "../components/employee/EmployeeList";
import EmployeeForm from "../components/employee/EmployeeForm";
import { useState } from "react";

const Employees = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Employees</h1>
      <button onClick={() => setShowForm(!showForm)} className="bg-green-500 text-white px-4 py-2 rounded-md">
        {showForm ? "Close Form" : "Add Employee"}
      </button>
      {showForm && <EmployeeForm onClose={handleCloseForm} />}
      <EmployeeList />
    </div>
  );
};

export default Employees;
