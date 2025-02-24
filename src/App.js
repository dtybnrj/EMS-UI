import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeDetails from "./components/employee/EmployeeDetails";
import Tasks from "./pages/Tasks";
import Attendance from "./pages/Attendance";
import Performance from "./pages/Performance";
import Leaves from "./pages/Leaves";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Navbar from "./components/common/Navbar"; 

function App() {
  const { auth } = useContext(AuthContext); // Get Auth State

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        
        {/* Show Navbar only when logged in */}
        {auth && <Navbar />}

        <div className="p-6">
          <Routes>
            {/* Authentication Routes */}
            <Route path="/login" element={!auth ? <LoginForm /> : <Navigate to="/" />} />
            <Route path="/register" element={!auth ? <RegisterForm /> : <Navigate to="/" />} />

            {/* Dashboard - Requires Auth */}
            <Route path="/" element={auth ? <Dashboard /> : <Navigate to="/login" />} />

            {/* Employee Management - Admin Only */}
            <Route path="/employees" element={auth?.role === "ADMIN" ? <Employees /> : <Navigate to="/" />} />
            <Route path="/employees/:id" element={auth?.role === "ADMIN" ? <EmployeeDetails /> : <Navigate to="/" />} />

            {/* Task Management - Accessible by All Users */}
            <Route path="/tasks" element={auth ? <Tasks /> : <Navigate to="/login" />} />

            {/* Attendance - Accessible by All Users */}
            <Route path="/attendance" element={auth ? <Attendance /> : <Navigate to="/login" />} />

            {/* Performance Review - Accessible by All Users */}
            <Route path="/performance" element={auth ? <Performance /> : <Navigate to="/login" />} />

            {/* Leave Management - Accessible by All Users */}
            <Route path="/leaves" element={auth ? <Leaves /> : <Navigate to="/login" />} />

            {/* Catch-All Route (Redirect to Login if Page Not Found) */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
