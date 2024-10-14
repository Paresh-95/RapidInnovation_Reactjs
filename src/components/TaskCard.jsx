import React from 'react';

const TaskCard = ({ task }) => {

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Low':
        return 'bg-green-300';
      case 'Medium':
        return 'bg-yellow-300';
      case 'High':
        return 'bg-red-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-200 text-black';
      case 'Completed':
        return 'bg-green-200 text-black';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition  w-full max-w-md flex flex-col h-full">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">{task.title || 'Untitled Task'}</h2>
      </div>


      <p className="text-gray-600 mb-4">{task.description || 'No description available.'}</p>

      
      <div className=" flex items-center space-x-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
          {task.status || 'No status available'}
        </span>
        <span className="flex items-center text-xs font-semibold text-black">
          Priority: <span className={`ml-2 rounded-full py-1 px-2 font-semibold ${getPriorityColor(task.priority)}`}>{task.priority || 'Unknown'}</span>
        </span>
      </div>

     
      <div className="mt-auto flex items-center text-sm text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span>{task.email || 'No email available'}</span>
      </div>
    </div>
  );
};

export default TaskCard;
