import { useEffect, useState } from "react";
import employeeApi from "../../api/employeeApi";
import Button from "../common/Button";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeApi.getAllEmployees().then(setEmployees).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.role}</td>
              <td className="p-2">
                <Button text="Edit" className="mr-2 bg-yellow-500" />
                <Button text="Delete" className="bg-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
