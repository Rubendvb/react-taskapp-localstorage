import { useEffect, useState } from 'react'

import TaskCreator from './components/TaskCreator'

import './App.css'
import TaskTable from './components/TaskTable'
import VisibilityControl from './components/VisibilityControl'

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

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done))
    setShowCompleted(false)
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

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />

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
