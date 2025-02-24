import EmployeeList from "../components/employee/EmployeeList";
import TaskList from "../components/task/TaskList";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <EmployeeList />
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
