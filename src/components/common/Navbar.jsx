import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/">Dashboard</Link>
      {auth?.role === "ADMIN" && <Link to="/employees" className="ml-4">Employees</Link>}
      <Link to="/tasks" className="ml-4">Tasks</Link>
      <Link to="/attendance" className="ml-4">Attendance</Link>
      <Link to="/leaves" className="ml-4">Leaves</Link>
    </nav>
  );
};

export default Navbar;
