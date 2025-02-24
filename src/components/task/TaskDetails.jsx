import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import taskApi from "../../api/taskApi";
import Button from "../common/Button";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await taskApi.getTaskById(id);
      setTask(response);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  if (!task) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <div className="mt-4 flex gap-2">
        <Button text="Edit" className="bg-yellow-500" />
        <Button text="Delete" className="bg-red-500" />
      </div>
    </div>
  );
};

export default TaskDetails;
