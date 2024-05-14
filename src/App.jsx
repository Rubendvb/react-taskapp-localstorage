import { useEffect, useState } from 'react'

import TaskCreator from './components/TaskCreator'

import './App.css'
import TaskTable from './components/TaskTable'

function App() {
  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

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

      <div>
        <input
          type="checkbox"
          name="show"
          id="show"
          onChange={() => setShowCompleted(!showCompleted)}
        />
        <label htmlFor="show">Show Tasks Done</label>
      </div>

      {showCompleted && (
        <TaskTable
          tasksItems={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </>
  )
}

export default App
