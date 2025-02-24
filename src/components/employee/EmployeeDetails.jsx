import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeApi from "../../api/employeeApi";
import Button from "../common/Button";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await employeeApi.getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error("Failed to fetch employee details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (!employee) {
    return <p className="text-center mt-4 text-red-500">Employee not found.</p>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          <p><strong>Department:</strong> {employee.department}</p>
        </div>
        <div>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>Joined Date:</strong> {new Date(employee.joinedDate).toDateString()}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button text="Edit" className="bg-yellow-500" />
        <Button text="Delete" className="bg-red-500" />
      </div>
    </div>
  );
};

export default EmployeeDetails;
