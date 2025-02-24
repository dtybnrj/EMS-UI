import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import taskApi from "../../api/taskApi";
import Button from "../common/Button";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskApi.getAllTasks();
      setTasks(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.status}</td>
              <td className="p-2">
                <Button text="View" onClick={() => navigate(`/tasks/${task.id}`)} />
                <Button text="Edit" className="ml-2 bg-yellow-500" />
                <Button text="Delete" className="ml-2 bg-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
