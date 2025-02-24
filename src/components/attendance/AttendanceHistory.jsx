import { useEffect, useState } from "react";
import attendanceApi from "../../api/attendanceApi";
import Table from "../common/Table";

const AttendanceHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await attendanceApi.getAttendanceByDate(new Date().toISOString().split("T")[0]);
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch attendance history", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance History</h2>
      <Table columns={["Date", "Status", "Time"]} data={history} />
    </div>
  );
};

export default AttendanceHistory;
