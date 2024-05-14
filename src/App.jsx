import { useEffect, useState } from 'react'

import TaskCreator from './components/TaskCreator'

import './App.css'
import TaskTable from './components/TaskTable'

function App() {
  const [tasksItems, setTasksItems] = useState([])

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  function toggleTask(task) {
    const taskFind = tasksItems.map((t) =>
      t.name === task.name ? { ...t, done: !t.done } : t
    )

    setTasksItems(taskFind)
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')

    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <>
      <TaskCreator createNewTask={createNewTask} />

      <TaskTable tasksItems={tasksItems} toggleTask={toggleTask} />
    </>
  )
}

export default App
