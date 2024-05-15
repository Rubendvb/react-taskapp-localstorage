import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    createNewTask(newTaskName)

    setNewTaskName('')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            name=""
            id=""
            value={newTaskName}
            placeholder="Enter a new task"
            onChange={(e) => setNewTaskName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Save Task</button>
        </div>
      </form>
    </>
  )
}

TaskCreator.propTypes = {
  createNewTask: PropTypes.func.isRequired,
}
