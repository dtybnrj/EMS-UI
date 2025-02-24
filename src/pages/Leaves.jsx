import LeaveRequestForm from "../components/leave/LeaveRequestForm";
import LeaveList from "../components/leave/LeaveList";

const Leaves = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Leave Management</h1>
      <LeaveRequestForm />
      <LeaveList />
    </div>
  );
};

export default Leaves;
