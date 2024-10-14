import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';  


const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState([]);

 
  const fetchTasks = async () => {
    try {
      const url = process.env.REACT_APP_BACKEND_API
      const response = await axios.get(url);
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
    <TaskContext.Provider value={{ task, loading, fetchTasks }}> 
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
