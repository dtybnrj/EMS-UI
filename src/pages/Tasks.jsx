import { useState } from "react";
import TaskList from "../components/task/TaskList";
import TaskForm from "../components/task/TaskForm";
import Button from "../components/common/Button";

const Tasks = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <Button text="Add Task" onClick={handleOpenForm} className="bg-green-500 text-white px-4 py-2 rounded-md" />

      {/* Show task form as a modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TaskForm onClose={handleCloseForm} />
          </div>
        </div>
      )}

      <TaskList />
    </div>
  );
};

export default Tasks;
