import DashboardCard from "./DashboardCard";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <DashboardCard title="Total Employees" value="120" />
      <DashboardCard title="Active Projects" value="15" />
      <DashboardCard title="Pending Leaves" value="10" />
    </div>
  );
};

export default DashboardStats;
