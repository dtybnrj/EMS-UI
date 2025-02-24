import { useEffect, useState } from "react";
import leaveApi from "../../api/leaveApi";
import Table from "../common/Table";
import Button from "../common/Button";

const LeaveList = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    leaveApi.getLeavesByEmployee(1).then(setLeaves).catch(console.error);
  }, []);

  const handleApprove = async (id) => {
    try {
      await leaveApi.approveLeave(id);
      alert("Leave Approved!");
    } catch (error) {
      console.error("Approval failed", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Leave Requests</h2>
      <Table columns={["Employee", "Start Date", "End Date", "Status", "Actions"]} data={leaves} />
      {leaves.map((leave) => (
        <Button key={leave.id} text="Approve" onClick={() => handleApprove(leave.id)} className="bg-green-500 mt-2" />
      ))}
    </div>
  );
};

export default LeaveList;
