import { useState } from 'react'

export default function TaskCreator() {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

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
