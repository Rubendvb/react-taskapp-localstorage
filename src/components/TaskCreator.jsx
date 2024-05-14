import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    createNewTask(newTaskName)

    localStorage.setItem('tasks', newTaskName)

    setNewTaskName('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={newTaskName}
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Save Task</button>
      </form>
    </>
  )
}

TaskCreator.propTypes = {
  createNewTask: PropTypes.func.isRequired,
}
