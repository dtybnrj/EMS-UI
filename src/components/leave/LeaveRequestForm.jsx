import { useState } from "react";
import leaveApi from "../../api/leaveApi";
import InputField from "../common/InputField";
import Button from "../common/Button";

const LeaveRequestForm = () => {
  const [leaveData, setLeaveData] = useState({ startDate: "", endDate: "", reason: "" });

  const handleChange = (e) => {
    setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await leaveApi.requestLeave(leaveData);
      alert("Leave request submitted!");
    } catch (error) {
      console.error("Leave request failed", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Request Leave</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Start Date" type="date" name="startDate" value={leaveData.startDate} onChange={handleChange} />
        <InputField label="End Date" type="date" name="endDate" value={leaveData.endDate} onChange={handleChange} />
        <InputField label="Reason" type="text" name="reason" value={leaveData.reason} onChange={handleChange} />
        <Button text="Submit Request" type="submit" className="mt-2" />
      </form>
    </div>
  );
};

export default LeaveRequestForm;
