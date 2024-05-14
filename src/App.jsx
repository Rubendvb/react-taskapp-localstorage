import { useState } from 'react'

import TaskCreator from './components/TaskCreator'

import './App.css'

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: 'Task 1', done: false },
    { name: 'Task 2', done: false },
    { name: 'Task 3', done: false },
    { name: 'Task 4', done: false },
  ])

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  return (
    <>
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
