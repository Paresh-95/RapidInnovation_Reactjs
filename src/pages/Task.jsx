import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskCard from "../components/TaskCard";
import SkeletonTaskCard from "../components/SkeletonTaskCard";

function Task() {
  const { task, loading } = useContext(TaskContext);
  const [showPending, setShowPending] = useState(false);

  if (loading)
    return (
      <div className="container mx-auto p-4 min-h-[500px]">
        <h1 className="text-3xl font-bold m-7">Loading Tasks...</h1>
        <div className="inline-block px-4 py-2 bg-gray-300 animate-pulse rounded-full w-40 h-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <SkeletonTaskCard key={index} />
            ))}
        </div>
      </div>
    );


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
