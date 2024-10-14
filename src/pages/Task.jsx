import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskCard from "../components/TaskCard";
import Loader from "../components/Loader";

function Task() {
  const { task, loading } = useContext(TaskContext);
  const [showPending, setShowPending] = useState(false);

  if (loading) {
    return (
      <div className="flex h-[480px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  const filteredTasks = showPending
    ? task.filter((t) => t.status === "Pending")
    : task;

  

  return (
    <div className="min-h-[500px] p-4">
      <h1 className='text-3xl font-bold m-7'>Task List From Backend</h1>

      <div className="mb-4">
        <button
          className={`px-4 py-2 text-black rounded-full ${
            showPending ? "bg-green-600" : "bg-yellow-300"
          }`}
          onClick={() => setShowPending(!showPending)}
        >
          {showPending ? "Show All Tasks" : "Show Pending Tasks"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((t, index) => <TaskCard key={index} task={t} />)
        ) : (
          <p>No tasks available ( Connect to Backend )</p>
        )}
      </div>
    </div>
  );
}

export default Task;
