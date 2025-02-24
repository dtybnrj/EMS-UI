import AttendanceTracker from "../components/attendance/AttendanceTracker";
import AttendanceHistory from "../components/attendance/AttendanceHistory";

const Attendance = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Attendance</h1>
      <AttendanceTracker />
      <AttendanceHistory />
    </div>
  );
};

export default Attendance;
