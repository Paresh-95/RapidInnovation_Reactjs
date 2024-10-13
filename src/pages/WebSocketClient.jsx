import React, { useEffect, useState } from 'react'
import { MdCheckCircle, MdError, MdRefresh } from 'react-icons/md'

function WSocketNot() {
  const [tasks, setTasks] = useState([])
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    let socket

    const connectWebSocket = () => {
      socket = new WebSocket('ws://localhost:4000')

      socket.onopen = () => {
        console.log('Connected to WebSocket server')
        setIsConnected(true)
      }

      socket.onmessage = (event) => {
        const updatedTask = JSON.parse(event.data)
        updateTaskList(updatedTask)
      }

      socket.onerror = (event) => {
        console.error('WebSocket error observed', event)
        setIsConnected(false)
      }

      socket.onclose = () => {
        console.log('WebSocket connection closed. Attempting to reconnect')
        setIsConnected(false)
        setTimeout(connectWebSocket, 1000)
      }
    }

    connectWebSocket()

    return () => {
      if (socket) {
        console.log('Closing WebSocket connection')
        socket.close()
      }
    }
  }, [])

  const updateTaskList = (updatedTask) => {
    setTasks((prevTasks) => {
      const existingTaskIndex = prevTasks.findIndex(task => task._id === updatedTask._id)
      if (existingTaskIndex > -1) {
        const newTasks = [...prevTasks]
        newTasks[existingTaskIndex] = updatedTask
        return newTasks
      } else {
        return [...prevTasks, updatedTask]
      }
    })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-10">
      <div className="flex flex-col gap-10 items-center justify-between mb-6  ">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Task Update Notifications</h1>
          <p className="text-sm text-gray-600 mt-1">Implemented using WebSocket</p>
        </div>
        <div className="flex items-center">
          {isConnected ? (
            <span className="flex  items-center text-green-500">
              <MdCheckCircle className="w-5 h-5 mr-2" />
              Connected
            </span>
          ) : (
            <span className="flex items-center text-yellow-500">
              <MdRefresh className="w-5 h-5 mr-2 animate-spin" />
              Connecting...
            </span>
          )}
        </div>
      </div>
      {tasks.length === 0 ? (
        <div className="text-center py-10">
          <MdError className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No tasks received yet. Waiting for updates...</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="bg-gray-50 rounded-md p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">{task.title}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800' :
                  task.status === 'in progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default WSocketNot