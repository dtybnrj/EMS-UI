import { useState } from "react";
import attendanceApi from "../../api/attendanceApi";
import Button from "../common/Button";

const AttendanceTracker = () => {
  const [status, setStatus] = useState("Not Checked In");

  const handleCheckIn = async () => {
    try {
      await attendanceApi.checkIn();
      setStatus("Checked In");
    } catch (error) {
      console.error("Check-in failed", error);
    }
  };

  const handleCheckOut = async () => {
    try {
      await attendanceApi.checkOut();
      setStatus("Checked Out");
    } catch (error) {
      console.error("Check-out failed", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance Tracker</h2>
      <p className="mb-4">Current Status: <strong>{status}</strong></p>
      <div className="flex gap-2">
        <Button text="Check In" onClick={handleCheckIn} className="bg-green-500" />
        <Button text="Check Out" onClick={handleCheckOut} className="bg-red-500" />
      </div>
    </div>
  );
};

export default AttendanceTracker;
