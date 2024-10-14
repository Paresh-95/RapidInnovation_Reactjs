import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';  // Import axios

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState([]);

 
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/getAlltasks');
      setTask(response.data.data); 
    } catch (error) {
      console.log('Failed to Fetch Task Data');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchTasks();  
  }, []);

  return (
    <TaskContext.Provider value={{ task, loading, fetchTasks }}> {/* Provide loading as well */}
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
